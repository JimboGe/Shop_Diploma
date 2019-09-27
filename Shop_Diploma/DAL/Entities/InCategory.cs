using System.ComponentModel.DataAnnotations.Schema;


namespace Shop_Diploma.DAL.Entities
{
    [Table("tblInCategories")]
    public class InCategory
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual Category Category { get; set; }
    }
}
