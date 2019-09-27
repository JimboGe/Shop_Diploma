using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Shop_Diploma.DAL.Entities
{
    [Table("tblProducts")]
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Size { get; set; }
        public string Count { get; set; }
        public string Color { get; set; }
        public string Gender { get; set; }
        public Decimal Price { get; set; }
        public virtual ICollection<ProductImage> Images { get; set; }
        //джинси, футбл
        public virtual Category Category { get; set; }
        public virtual Brand Brand { get; set; }
    }
}
