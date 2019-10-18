using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Shop_Diploma.DAL;
using Shop_Diploma.DAL.Entities;

namespace Shop_Diploma.Controllers
{
    [Route("/api/[controller]/[action]")]
    [ApiController]
    [Authorize(Roles = "Admin")]
    public class AdminController : ControllerBase
    {
        readonly UserManager<DbUser> _userManager;
        readonly EFDbContext _ctx;
        public AdminController(UserManager<DbUser> userManager, EFDbContext ctx)
        {
            _userManager = userManager;
            _ctx = ctx;
        }
        // GET: api/Admin
        [HttpGet]
        public async Task<ActionResult> GetUsers()
        {
            var users = await _userManager.Users.Select(x=>new {
                x.Id,
                x.Email,
                x.LastName,
                x.FirstName,
                x.PhoneNumber,
                x.Region,
                x.City,
                x.NumberDelivery
            }).ToListAsync();
            if (users != null)
            {
                return Ok(users);
            }
            return BadRequest("Не найдено користувачів");
        }

        // POST: api/Admin
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Admin/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
