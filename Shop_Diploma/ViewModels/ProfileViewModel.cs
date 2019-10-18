using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Shop_Diploma.ViewModels
{
    public class ProfileEditViewModel
    {
        [Required(ErrorMessage = "Поле є обов'язковим")]
        public string ClientId { get; set; }
        [Required(ErrorMessage = "Поле є обов'язковим")]
        public string FirstName { get; set; }
        [Required(ErrorMessage = "Поле є обов'язковим")]
        public string LastName { get; set; }
        [Required(ErrorMessage = "Поле є обов'язковим")]
        public string Email { get; set; }
        [Required(ErrorMessage = "Поле є обов'язковим")]
        public string PhoneNumber { get; set; }
    }
    public class ProfileChangePassword
    {
        [Required(ErrorMessage = "Поле є обов'язковим")]
        public string ClientId { get; set; }
        [Required(ErrorMessage = "Поле є обов'язковим")]
        public string OldPassword { get; set; }
        [Required(ErrorMessage = "Поле є обов'язковим")]
        public string NewPassword { get; set; }
    }
    public class ProfileChangeAddress
    {
        [Required(ErrorMessage = "Поле є обов'язковим")]
        public string ClientId { get; set; }
        [Required(ErrorMessage = "Поле є обов'язковим")]
        public string Region { get; set; }
        [Required(ErrorMessage = "Поле є обов'язковим")]
        public string City { get; set; }
        [Required(ErrorMessage = "Поле є обов'язковим")]
        public int NumberDelivery { get; set; }
    }
}
