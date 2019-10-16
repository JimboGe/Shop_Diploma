using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Shop_Diploma.DAL.Entities;
using System.Collections.Generic;

namespace Shop_Diploma.DAL
{
    public class EFDbContext : IdentityDbContext<DbUser>
    {
        public EFDbContext(DbContextOptions<EFDbContext> options)
            : base(options)
        {
           
        }
        public DbSet<Product> Products { get; set; }
        public DbSet<ProductImage> ProductImages { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Subcategory> SubCategories { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Brand> Brands { get; set; }
        public DbSet<SizeImage> SizeImages { get; set; }
        public DbSet<Review> Reviews { get; set; }
        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<OrdersProducts>()
             .HasKey(t => new { t.OrderId, t.ProductId });

            modelBuilder.Entity<OrdersProducts>()
                .HasOne(sc => sc.Order)
                .WithMany(s => s.OrdersProducts)
                .HasForeignKey(sc => sc.OrderId);

            modelBuilder.Entity<OrdersProducts>()
                .HasOne(sc => sc.Product)
                .WithMany(c => c.OrdersProducts)
                .HasForeignKey(sc => sc.ProductId);
        }
        
    }
   
}

