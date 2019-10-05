using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Shop_Diploma.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Shop_Diploma.DAL
{
    public class SeederDB
    {

        public static void SeedAdmin(UserManager<DbUser> userManager,
            RoleManager<IdentityRole> roleManager)
        {
            var email = "admin@gmail.com";
            var roleName = "Admin";
            var password = "Qwerty1-";
            var count = userManager.Users.Count();

            var user = new DbUser
            {
                Email = email,
                UserName = email
            };
            var result = userManager.CreateAsync(user, password).Result;

            var roleresult = roleManager.CreateAsync(new IdentityRole
            {
                Name = roleName
            }).Result;
            
            result = userManager.AddToRoleAsync(user, roleName).Result;
        }
        public static void Seed(EFDbContext _ctx)
        {
            var brand = new Brand
            {
                Name = "Nike"
            };
            if (!_ctx.Brands.Any())
            {
                _ctx.Brands.Add(brand);
            }
            var category = new Category
            {
                Name = "Shoes"
            };
            if (!_ctx.Categories.Any())
            {
                _ctx.Categories.Add(category);
            }
            var shoesSizeImage = new SizeImage
            {
                CategoryName = "shoes",
                Path = "https://gard.com.ua/image/catalog/shop/STRU_aea1bb99-cb02-11e9-af8a-9e1680149fdf.jpg"
            };
            var weatherSizeImage = new SizeImage
            {
                CategoryName = "weather",
                Path = "https://gard.com.ua/image/catalog/shop/STRU_aea1bb99-cb02-11e9-af8a-9e1680149fdf.jpg"
            };
            if (!_ctx.SizeImages.Any())
            {
                _ctx.SizeImages.Add(weatherSizeImage);
                _ctx.SizeImages.Add(shoesSizeImage);
            }
            //string []sizes = {"S","M","L","XL","XXL"};
            var products = new Product[]
            {
                    new Product{
                    Name="tet",
                    Description = "edees",
                    BrandId = brand.Id,
                    CategoryId = category.Id,
                    SizeImageId = shoesSizeImage.Id,
                    Color = "yellow",
                    Count = 10,
                    Price = 1000,
                    Gender = "Female",
                    Size = "S,M,L,XL"
                    }
            };
            if (!_ctx.Products.Any())
            {
                _ctx.Products.AddRange(products);
            }
            var productImages = new ProductImage[]
            {
                    new ProductImage
                    {
                        Path = "/png/first.png",
                        ProductId = products[0].Id
                    }
            };
            var review = new Review[]
            {
                    new Review
                    {
                        Name = "Sergiy",
                        Rating = 5,
                        Text = "TEST REVIEW",
                        ProductId = products[0].Id,
                        Date = DateTime.Now.ToShortDateString()
                    }
            };
            if (!_ctx.Reviews.Any())
            {
                _ctx.Reviews.AddRange(review);
            }
                if (!_ctx.ProductImages.Any())
            {
                _ctx.ProductImages.AddRange(productImages);
            }
            _ctx.SaveChanges();
        }
        public static void SeedDataByAS(IServiceProvider services)
        {
            using (var scope = services.GetRequiredService<IServiceScopeFactory>().CreateScope())
            {
                var manager = scope.ServiceProvider.GetRequiredService<UserManager<DbUser>>();
                var managerRole = scope.ServiceProvider.GetRequiredService<RoleManager<IdentityRole>>();
                SeedAdmin(manager, managerRole);
            }
        }
    }
}
