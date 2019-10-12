using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Shop_Diploma.DAL.Entities
{
    [Table("tblOrdersProducts")]
    public class OrdersProducts
    {
        [Key, ForeignKey("Product")]
        public int ProductId { get; set; }
        public Product Product { get; set; }
        [Key, ForeignKey("Order")]
        public int OrderId { get; set; }
        public Order Order { get; set; }
    }

}
