using Shop_Diploma.Helpers.Attributes;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Shop_Diploma.ViewModels
{
    public class RegisterViewModel
    {
        [Required(ErrorMessage = "Поле є обов'язковим")]
        public string FirstName { get; set; }
        [Required(ErrorMessage = "Поле є обов'язковим")]
        public string LastName { get; set; }
        [ExistentClientEmail(ErrorMessage = "Уже використовується")]
        [Required(ErrorMessage = "Поле є обов'язковим")]
        [EmailAddress(ErrorMessage = "Не валідна пошта")]
        public string Email { get; set; }
        [Required(ErrorMessage = "Поле є обов'язковим")]
        public string Password { get; set; }
        [Required(ErrorMessage = "Поле є обов'язковим")]
        [Phone(ErrorMessage = "Не валідний номер")]
        public string PhoneNumber { get; set; }
        [Required(ErrorMessage = "Поле є обов'язковим")]
        public string Region { get; set; }
        [Required(ErrorMessage = "Поле є обов'язковим")]
        public string City { get; set; }
        [Required(ErrorMessage = "Поле є обов'язковим")]
        public int NumberDelivery { get; set; }
    }
}
