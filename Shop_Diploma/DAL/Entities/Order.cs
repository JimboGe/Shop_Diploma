using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Shop_Diploma.DAL.Entities
{
    [Table("tblOrders")]
    public class Order
    {
        public Order()
        {
            OrdersProducts = new List<OrdersProducts>();
        }
        [Key]
        public int Id { get; set; }
        public decimal FullPrice { get; set; }
        public string Size { get; set; }
        public int Count { get; set; }
        public DateTime Date { get; set; }
        [ForeignKey ("User")]
        public string UserId { get; set; }
        public virtual DbUser User { get; set; }
        public ICollection<OrdersProducts> OrdersProducts { get; set; }
    }
}
