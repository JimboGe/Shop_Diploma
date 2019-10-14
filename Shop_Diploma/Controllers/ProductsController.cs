﻿using System;
using System.Collections.Generic;
using System.Drawing.Imaging;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;
using Microsoft.Extensions.Configuration;
using Shop_Diploma.DAL;
using Shop_Diploma.DAL.Entities;
using Shop_Diploma.Helpers;
using Shop_Diploma.ViewModels;

namespace Shop_Diploma.Controllers
{
    [Route("/api/[controller]/[action]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly EFDbContext _ctx;
        private readonly IConfiguration _configuration;
        private readonly IHostingEnvironment _env;

        public ProductsController(EFDbContext _ctx, IConfiguration _configuration, IHostingEnvironment _env)
        {
            this._ctx = _ctx;
            this._configuration = _configuration;
            this._env = _env;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> All()
        {
            var products = await _ctx.Products.GroupBy(x => x.Id)
                .Select(x => x.Take(1).Select(p => new
                {
                    p.Id,
                    p.Name,
                    p.Description,
                    p.Gender,
                    p.Color,
                    p.Count,
                    p.Size,
                    p.Price,
                    p.Brand,
                    p.Category,
                    p.Images,
                    p.SizeImage,
                    p.Reviews
                })).ToListAsync();
            if (products != null)
            {
                return Ok(products);
            }
            return BadRequest("Не найдено продуктів");
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<IEnumerable<Product>>> ById(int id)
        {
            var products = await _ctx.Products.Where(x => x.Id == id).GroupBy(x => x.Id)
                .Select(x => x.Take(1).Select(p => new
                {
                    p.Id,
                    p.Name,
                    p.Description,
                    p.Gender,
                    p.Color,
                    p.Count,
                    p.Size,
                    p.Price,
                    p.Brand,
                    p.Category,
                    p.Images,
                    p.SizeImage,
                    p.Reviews
                })).SingleOrDefaultAsync();
            if (products != null)
            {
                return Ok(products);
            }
            return BadRequest("Не найдено продуктів");
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> ByParams(string gender, string category, string brand, string color, string size, string minprice, string maxprice)
        {
            decimal result;
            decimal result1;
            var products = await _ctx.Products.Select(x => new
            {
                x.Id,
                x.Name,
                x.Description,
                x.Gender,
                x.Color,
                x.Count,
                x.Size,
                x.Price,
                x.Brand,
                x.Category,
                x.Images,
                x.SizeImage,
                x.Reviews
            }).ToListAsync();
            if (!String.IsNullOrEmpty(gender)) products = products.Where(x => x.Gender == gender).ToList();
            if (!String.IsNullOrEmpty(brand)) products = products.Where(x => x.Brand.Name == brand).ToList();
            if (!String.IsNullOrEmpty(category)) products = products.Where(x => x.Category.Name == category).ToList();
            if (!String.IsNullOrEmpty(color)) products = products.Where(x => x.Color == color).ToList();
            if (!String.IsNullOrEmpty(size))
            {
                return Ok(products);
            }

            if (Decimal.TryParse(minprice, out result) && Decimal.TryParse(maxprice, out result1))
            {
                products = products.Where(x => x.Price >= result && x.Price <= result1).ToList();
            }
            if (products != null)
            {
                return Ok(products.GroupBy(x => x.Id));
            }
            return BadRequest("Не найдено продуктів");
        }

        [HttpPost]
        public async Task<ActionResult<IEnumerable<Product>>> NewReview([FromBody] Review review)
        {
            var newReview = new Review { Name = review.Name, Rating = review.Rating, Text = review.Text, ProductId = review.ProductId, Date = DateTime.Now.ToShortDateString() };
            await _ctx.Reviews.AddAsync(newReview);
            await _ctx.SaveChangesAsync();
            return Ok(review);
        }

        //[Authorize(Roles = "Admin")]
        [HttpPost]
        public async Task<ActionResult<IEnumerable<Product>>> NewProduct([FromBody] ProductViewModel product)
        {
            var newImages = new List<ProductImage>();
            for (int i = 0; i < product.Images.Count; i++)
            {
                newImages.Add(new ProductImage { Path = product.Images.ToList()[i].Path });
            }
            await _ctx.ProductImages.AddRangeAsync(newImages);
            var newProduct = new Product
            {
                Name = product.Name,
                BrandId = product.BrandId,
                CategoryId = product.CategoryId,
                Color = product.Color,
                Count = product.Count,
                Description = product.Description,
                Gender = product.Gender,
                Size = product.Size,
                Price = product.Price,
                SizeImageId = product.SizeImageId,
                Images = newImages
            };
            await _ctx.Products.AddAsync(newProduct);
            await _ctx.SaveChangesAsync();
            return Ok(newProduct);
        }

        //[Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public async Task<ActionResult<IEnumerable<Product>>> DeleteProduct([FromRoute]int id)
        {
            var product = await _ctx.Products.FindAsync(id);
            var imagesFromProduct = await _ctx.ProductImages.Where(x => x.ProductId == id).ToListAsync();
            var reviews = await _ctx.Reviews.Where(x => x.ProductId == id).ToListAsync();
            for (int i = 0; i < imagesFromProduct.Count; i++)
            {
                _ctx.ProductImages.Remove(imagesFromProduct[i]);
            }
            for (int i = 0; i < reviews.Count; i++)
            {
                _ctx.Reviews.Remove(reviews[i]);
            }
            _ctx.Products.Remove(product);
            await _ctx.SaveChangesAsync();
            return Ok("Deleted product by Id: " + product.Id);

        }

        //[Authorize(Roles = "Admin")]
        [HttpPut("{id}")]
        public async Task<ActionResult<IEnumerable<Product>>> EditProduct([FromRoute]int id, [FromBody] Product product)
        {
            if (id != product.Id)
            {
                return BadRequest("ERROR");
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            else
            {
                try
                {
                    _ctx.Update(product);
                    await _ctx.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!ProductExists(id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
            }
            return Ok();
        }

        [HttpPost]
        public async Task<IActionResult> AddFile(IFormFile uploadedFile)
        {
            if (uploadedFile != null)
            {
                string path = _configuration.GetValue<string>("ImagePath") + uploadedFile.FileName;
                using (var fileStream = new FileStream(_env.WebRootPath + path, FileMode.Create))
                {
                    await uploadedFile.CopyToAsync(fileStream);
                    var file = new ProductImage {Path = path + uploadedFile.FileName };
                    _ctx.ProductImages.Add(file);
                    _ctx.SaveChanges();
                }
            }
            return Ok("SUCCES");
            //    string imageName = Guid.NewGuid().ToString() + ".jpg";
            //string base64 = model.Path;
            //if (base64.Contains(","))
            //{
            //    base64 = base64.Split(',')[1];
            //}
            //var bmp = base64.FromBase64StringToImage();
            //string fileDestDir = _env.ContentRootPath;
            //fileDestDir = Path.Combine(fileDestDir, _configuration.GetValue<string>("ImagePath"));

            //string fileSave = Path.Combine(fileDestDir, imageName);
            //bmp.Save(fileSave);

            //return Ok("добавленно");
        }

        private bool ProductExists(int id)
        {
            var product = _ctx.Products.Where(x => x.Id == id).SingleOrDefault();
            bool res = product!=null?true:false;
            return res;
        }
    }

}
