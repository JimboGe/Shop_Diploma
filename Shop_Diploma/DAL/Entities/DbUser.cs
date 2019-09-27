using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Shop_Diploma.DAL.Entities
{
    [Table("tblUsers")]
    public class DbUser : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Region { get; set; }
        public string City { get; set; }
        public int NumberDelivery { get; set; }
        public virtual ICollection<Order> Orders { get; set; }
    }
}
