using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Shop_Diploma.ViewModels
{
    public class ProductViewModel
    {
        [Required(ErrorMessage = "Поле є обов'язковим")]
        public string Name { get; set; }
        [Required(ErrorMessage = "Поле є обов'язковим")]
        public string Description { get; set; }
        [Required(ErrorMessage = "Поле є обов'язковим")]
        public string Size { get; set; }
        [Required(ErrorMessage = "Поле є обов'язковим")]
        public int Count { get; set; }
        [Required(ErrorMessage = "Поле є обов'язковим")]
        public string Color { get; set; }
        [Required(ErrorMessage = "Поле є обов'язковим")]
        public string Gender { get; set; }
        [Required(ErrorMessage = "Поле є обов'язковим")]
        public decimal Price { get; set; }
        [Required(ErrorMessage = "Поле є обов'язковим")]
        public int CategoryId { get; set; }
        [Required(ErrorMessage = "Поле є обов'язковим")]
        public int BrandId { get; set; }
        [Required(ErrorMessage = "Поле є обов'язковим")]
        public int SizeImageId { get; set; }
    }
    public class ImagesProductViewModel
    {
        [Required(ErrorMessage = "Поле є обов'язковим")]
        public string Path { get; set; }
        [Required(ErrorMessage = "Поле є обов'язковим")]
        public string ProductId { get; set; }
    }
}
