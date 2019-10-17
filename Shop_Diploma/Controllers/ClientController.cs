using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Shop_Diploma.DAL;
using Shop_Diploma.DAL.Entities;
using Shop_Diploma.Helpers;
using Shop_Diploma.ViewModels;

namespace Shop_Diploma.Controllers
{
    [Route("/api/[controller]/[action]")]
    [ApiController]
    public class ClientController : ControllerBase
    {
        readonly UserManager<DbUser> _userManager;
        readonly EFDbContext _ctx;
        public ClientController(UserManager<DbUser> userManager, EFDbContext ctx)
        {
            _userManager = userManager;
            _ctx = ctx;
        }
        // GET: api/Client

        [HttpGet("{id}")]
        public async Task<ActionResult> GetUserInfoById(string id)
        {
            var user = await _userManager.Users.Where(x => x.Id == id).SingleOrDefaultAsync();
            if (user != null)
            {
                return Ok(user);
            }
            return BadRequest("Не найдено користувача");
        }
        [HttpPost("{id}")]
        public async Task<ActionResult> ProfileEdit([FromRoute] string id, [FromBody] ProfileEditViewModel model)
        {
            if (!ModelState.IsValid)
            {
                var errrors = CustomValidator.GetErrorsByModel(ModelState);
                return BadRequest(errrors);
            }
            var user = await _userManager.FindByIdAsync(model.ClientId);
            if (user == null)
            {
                return BadRequest(new { invalid = "User is not found" });
            }
            if (user.FirstName != model.FirstName)
                user.FirstName = model.FirstName;
            if (user.LastName != model.LastName)
                user.LastName = model.LastName;
            if (user.Email != model.Email)
            {
                var resultMail = await _userManager.FindByEmailAsync(model.Email);
                if (resultMail == null)
                {
                    user.UserName = model.Email;
                    user.Email = model.Email;
                }
                else
                {
                    return BadRequest(new { invalid = "Цей емейл уже зайнятий!" });
                }
            }
            if (user.PhoneNumber != model.PhoneNumber)
                user.PhoneNumber = model.PhoneNumber;
            var result = await _userManager.UpdateAsync(user);
            if (!result.Succeeded)
            {
                var errrors = CustomValidator.GetErrorsByIdentityResult(result);
                return BadRequest(errrors);
            }
            return Ok();
        }

        [HttpPost]
        public async Task<ActionResult> ChangePassword([FromBody] ProfileChangePassword model)
        {
            if (!ModelState.IsValid)
            {
                var errrors = CustomValidator.GetErrorsByModel(ModelState);
                return BadRequest(errrors);
            }

            var user = await _userManager.FindByIdAsync(model.ClientId);
            if (user == null)
                return BadRequest(new { invalid = "User is not found" });

            IdentityResult result =
                    await _userManager.ChangePasswordAsync(user, model.OldPassword, model.NewPassword);

            if (!result.Succeeded)
            {
                var errrors = CustomValidator.GetErrorsByIdentityResult(result);
                return BadRequest(errrors);
            }

            return Ok();
        }
    }
}
