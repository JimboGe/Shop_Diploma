using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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
        public ProductsController(EFDbContext _ctx)
        {
            this._ctx = _ctx;
        }
        [HttpGet]
        public IActionResult All()
        {
            var products = _ctx.Products.GroupBy(x => x.Id)
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
                }));
            if (products != null)
            {
                return Ok(products);
            }
            return BadRequest("Не найдено продуктів");
        }

        [HttpGet("{id:int}")]
        public IActionResult ById(int id)
        {
            var products = _ctx.Products.Where(x => x.Id == id).GroupBy(x => x.Id)
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
                })).SingleOrDefault();
            if (products != null)
            {
                return Ok(products);
            }
            return BadRequest("Не найдено продуктів");
        }

        [HttpGet]
        public IActionResult ByParams(string gender, string category, string brand)
        {
            var products = _ctx.Products.Select(x => new
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
            }).ToList();
            if (!String.IsNullOrEmpty(gender)) products = products.Where(x => x.Gender == gender).ToList();
            if (!String.IsNullOrEmpty(brand)) products = products.Where(x => x.Brand.Name == brand).ToList();
            if (!String.IsNullOrEmpty(category)) products = products.Where(x => x.Category.Name == category).ToList();
            if (products != null)
            {
                return Ok(products.GroupBy(x => x.Id));
            }
            return BadRequest("Не найдено продуктів");
        }

        [HttpPost]
        public IActionResult NewReview([FromBody] Review review)
        {
            var newReview = new Review { Name = review.Name, Rating = review.Rating, Text = review.Text, ProductId = review.ProductId, Date = DateTime.Now.ToShortDateString() };
            _ctx.Reviews.Add(newReview);
            _ctx.SaveChanges();
            return Ok(review);

        }

        //[Authorize(Roles = "Admin")]
        [HttpPost]
        public IActionResult NewProduct([FromBody] ProductViewModel product)
        {
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
                SizeImageId = product.SizeImageId
            };
            _ctx.Products.Add(newProduct);
            _ctx.SaveChanges();
            return Ok(newProduct);
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteProduct([FromRoute]int id)
        {
            var product = _ctx.Products.Where(x => x.Id == id).SingleOrDefault();
            //var imagesFromProduct = _ctx.ProductImages.Where(x => x.ProductId == id).ToList();
            //for (int i = 0; i < imagesFromProduct.Count; i++)
            //{
            //    _ctx.ProductImages.Remove(imagesFromProduct[i]);
            //}
            _ctx.Products.Remove(product);
            _ctx.SaveChanges();
            return Ok("Delete");

        }

    }

}
