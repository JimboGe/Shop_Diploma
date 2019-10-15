using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Shop_Diploma.DAL.Entities
{
    [Table("tblSizeImages")]
    public class SizeImage
    {
        [Key]
        public int Id { get; set; }
        public string CategoryName { get; set; }
        public string Path { get; set; }
        public virtual ICollection<Product> Products { get; set; }
    }
}
