using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Shop_Diploma.DAL.Entities
{
    [Table("tblProducts")]
    public class Product
    {
        public Product()
        {
            OrdersProducts = new List<OrdersProducts>();
            Date = DateTime.Today;
        }
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string[]Sizes { get; set; }
        public int Count { get; set; }
        public string Color { get; set; }
        public string Gender { get; set; }
        public DateTime Date { get; set; }
        public Decimal Price { get; set; }
        [ForeignKey("Subcategory")]
        public int SubcategoryId { get; set; }
        [ForeignKey("Brand")]
        public int BrandId { get; set; }
        [ForeignKey("SizeImage")]
        public int SizeImageId { get; set; }

        public ICollection<OrdersProducts> OrdersProducts { get; set; }
        public virtual SizeImage SizeImage { get; set; }
        //джинси, футбл, взуття
        public virtual Subcategory Subcategory { get; set; }
        public virtual Brand Brand { get; set; }
        public virtual ICollection<ProductImage> Images { get; set; }
        public virtual ICollection<Review> Reviews { get; set; }
        

    }
}
