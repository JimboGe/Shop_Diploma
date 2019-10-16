using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Shop_Diploma.DAL;
using Shop_Diploma.DAL.Entities;

namespace Shop_Diploma.Controllers
{
    [Route("/api/[controller]/[action]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly EFDbContext _ctx;
        public CategoriesController(EFDbContext _ctx)
        {
            this._ctx = _ctx;
        }
        // GET: api/Categories
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Category>>> GetCategories()
        {
            var categories = await _ctx.Categories.GroupBy(x => x.Id)
                .Select(x => x.Take(1).Select(p => new
                {
                    p.Id,
                    p.Name,
                    p.UAName,
                    p.Subcategories
                })).ToListAsync();
            if (categories != null)
            {
                return Ok(categories);
            }
            return BadRequest("Категорій не знайдено");
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Category>>> GetCategoriesByGender(string gender)
        {
            var categories = await _ctx.Categories.GroupBy(x => x.Id)
                .Select(x => x.Take(1).Select(p => new
                {
                    p.Id,
                    p.Name,
                    p.UAName,
                    p.Subcategories
                })).ToListAsync();
            if (categories != null)
            {
                return Ok(categories);
            }
            return BadRequest("Категорій не знайдено");
        }
    }
}
