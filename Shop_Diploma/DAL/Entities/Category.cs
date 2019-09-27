using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Shop_Diploma.DAL.Entities
{
    [Table("tblCategories")]
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual ICollection<Product> Products { get; set; }
        public virtual ICollection<InCategory> InCategories { get; set; }
    }
}
