using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace Shop_Diploma.DAL.Entities
{
    [Table("tblInCategories")]
    public class InCategory
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual Category Category { get; set; }
    }
}
