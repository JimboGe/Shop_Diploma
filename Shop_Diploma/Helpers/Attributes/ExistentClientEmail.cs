using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;
using Shop_Diploma.DAL.Entities;

namespace Shop_Diploma.Helpers.Attributes
{
    public class ExistentClientEmail : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            var service = (UserManager<DbUser>)validationContext
                       .GetService(typeof(UserManager<DbUser>));
            var user = service.FindByEmailAsync(value.ToString()).Result;
            if (user != null)
            {
                return new ValidationResult(null);
            }
            return ValidationResult.Success;
        }
    }
}
