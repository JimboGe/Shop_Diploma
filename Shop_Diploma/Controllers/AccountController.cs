using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Shop_Diploma.DAL.Entities;
using Shop_Diploma.Helpers;
using Shop_Diploma.ViewModels;

namespace Shop_Diploma.Controllers
{
    [Produces("application/json")]
    [Route("/api/[controller]/[action]")]
    public class AccountController : ControllerBase
    {
        readonly UserManager<DbUser> _userManager;
        readonly SignInManager<DbUser> _signInManager;
        public AccountController(UserManager<DbUser> userManager, SignInManager<DbUser> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager; 
        }
        [HttpGet]
        public IActionResult Get()
        {
            return Ok("Не найдено продуктів");
        }
        // POST: api/Account
        [HttpPost]
        public async Task<IActionResult>Register([FromBody]RegisterViewModel credentials)
        {
            if (!ModelState.IsValid)
            {
                var errrors = CustomValidator.GetErrorsByModel(ModelState);
                return BadRequest(errrors);
            }
            var user = new DbUser
            {
                UserName = credentials.Email,
                Email = credentials.Email,
                PhoneNumber = credentials.PhoneNumber,
                FirstName = credentials.FirstName,
                LastName =credentials.LastName,
                NumberDelivery = credentials.NumberDelivery,
                City = credentials.City,
                Region = credentials.Region
            };

            var result = await _userManager.CreateAsync(user, credentials.Password);
            if (!result.Succeeded)
            {
                return BadRequest(result.Errors);
            }
            await _signInManager.SignInAsync(user, isPersistent: false);

            return Ok(CreateToken(user));
        }


        string CreateToken(DbUser user)
        {
            var claims = new Claim[]
            {
                new Claim("id", user.Id),
                new Claim("name", user.UserName)
            };

            var signingKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("this is the secret phrase"));
            var signingCredentials = new SigningCredentials(signingKey, SecurityAlgorithms.HmacSha256);

            var jwt = new JwtSecurityToken(signingCredentials: signingCredentials, claims: claims);
            return new JwtSecurityTokenHandler().WriteToken(jwt);
        }
    }
}
