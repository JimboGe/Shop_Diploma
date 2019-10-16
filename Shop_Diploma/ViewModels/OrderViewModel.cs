using Shop_Diploma.DAL.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Shop_Diploma.ViewModels
{
    public class OrderViewModel
    {
        [Required(ErrorMessage = "Поле є обов'язковим")]
        public decimal FullPrice { get; set; }
        [Required(ErrorMessage = "Поле є обов'язковим")]
        public DateTime Date { get; set; }
        [Required(ErrorMessage = "Поле є обов'язковим")]
        public string UserId { get; set; }
        [Required(ErrorMessage = "Поле є обов'язковим")]
        public Product Product { get; set; }
        [Required(ErrorMessage = "Поле є обов'язковим")]
        public string ProductSize { get; set; }
        [Required(ErrorMessage = "Поле є обов'язковим")]
        public int ProductCount { get; set; }

    }
   
}
