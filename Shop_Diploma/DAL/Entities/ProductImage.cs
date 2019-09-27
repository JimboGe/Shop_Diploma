using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Shop_Diploma.DAL.Entities
{
    [Table("tblProductImages")]
    public class ProductImage
    {
        [ForeignKey("User"), Key]
        public string Id { get; set; }
        public string Path { get; set; }
        public virtual Product Product { get; set; }
    }
}
