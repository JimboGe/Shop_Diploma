using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Shop_Diploma.DAL.Entities
{
    [Table("tblOrders")]
    public class Order
    {
        [Key]
        public int Id { get; set; }
        public decimal Price { get; set; }
        public DateTime Date { get; set; }
        public virtual DbUser User { get; set; }
    }
}
