using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Shop_Diploma.DAL.Entities
{
    [Table("tblOrder")]
    public class Order
    {
        public int Id { get; set; }
        public virtual ICollection<Product> Products { get; set; }
        public virtual DbUser User { get; set; }
        public decimal Price { get; set; }
        public DateTime Date { get; set; }
    }
}
