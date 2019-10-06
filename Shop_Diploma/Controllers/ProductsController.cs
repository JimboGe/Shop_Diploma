using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Shop_Diploma.DAL;
using Shop_Diploma.DAL.Entities;
using Shop_Diploma.Helpers;

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
        public  IActionResult All()
        {
            var products =  _ctx.Products.GroupBy(x => x.Id)
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
        [HttpGet("{brand}")]
        public IActionResult ByBrand(string brand)
        {
            var product = _ctx.Products.Where(x => x.Brand.Name == brand).GroupBy(x => x.Id)
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
                })).ToList();
            if (product != null)
            {
                return Ok(product);
            }
            return BadRequest("Не найдено продуктів");
        }

        [HttpGet("{gender}")]
        public IActionResult ByGender(string gender)
        {
            var product = _ctx.Products.Where(x => x.Gender == gender).GroupBy(x => x.Id)
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
                })).ToList();
            if (product != null)
            {
                return Ok(product);
            }
            return BadRequest("Не найдено продуктів");
        }

        [HttpGet("{category}")]
        public IActionResult ByCategory(string category)
        {
            var product = _ctx.Products.Where(x => x.Category.Name == category).GroupBy(x => x.Id)
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
                })).ToList();
            if (product != null)
            {
                return Ok(product);
            }
            return BadRequest("Не найдено продуктів");
        }

        [HttpPost]
        public IActionResult AddReview([FromBody] Review review)
        {
            var newReview = new Review { Name = review.Name, Rating = review.Rating, Text = review.Text, ProductId = review.ProductId, Date = DateTime.Now.ToShortDateString() };
            _ctx.Reviews.Add(newReview);
            _ctx.SaveChanges();
            return Ok(review);

        }
        
        // PUT: api/Product/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var removeProduct = _ctx.Products.Where(x => x.Id == id).FirstOrDefault();
            _ctx.Products.Remove(removeProduct);
            if (removeProduct != null)
            {
                return Ok($"Product has been removed: {removeProduct.Id}");
            }
            return BadRequest("Не найдено продуктів");
        }
    }
}
