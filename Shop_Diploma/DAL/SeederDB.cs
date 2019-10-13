using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Shop_Diploma.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shop_Diploma.DAL
{
    [ValidateAntiForgeryToken]

    public class SeederDB
    {
        public async static Task CreateRoles(IServiceProvider service, List<string> roles)
        {
            var roleManager = service.GetRequiredService<RoleManager<IdentityRole>>();
            var userManager = service.GetRequiredService<UserManager<DbUser>>();
            var email = String.Empty;
            var password = String.Empty;
            DbUser user;
            bool roleCheck;
            for (int i = 0; i < roles.Count; i++)
            {
                if (roles[i] == "Admin")
                {
                    email = "admin@gmail.com";
                    password = "Qwerty1-";
                }
                if (roles[i] == "Buyer")
                {
                    email = "buyer@gmail.com";
                    password = "Qwerty1-";
                }
                IdentityResult roleResult;
                roleCheck = await roleManager.RoleExistsAsync(roles[i]);
                if (!roleCheck)
                {
                    roleResult = await roleManager.CreateAsync(new IdentityRole(roles[i]));
                    user = new DbUser
                    {
                        Email = email,
                        UserName = email
                    };
                    await userManager.CreateAsync(user, password);
                    await userManager.AddToRoleAsync(user, roles[i]);
                }
            }
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

            var product = new Product
            {
                Name = "tet",
                Description = "edees",
                BrandId = brand.Id,
                CategoryId = category.Id,
                SizeImageId = shoesSizeImage.Id,
                Color = "yellow",
                Count = 10,
                Price = 1000,
                Gender = "Female",
                Size =  "S,M,L,XL" 
            };

            if (!_ctx.Products.Any())
            {
                _ctx.Products.Add(product);
            }
            
            var order = new Order
            {
                Date = DateTime.Now,
                FullPrice = 125
            };
            
            var order1 = new Order
            {
                Date = DateTime.Now,
                FullPrice = 12235
            };
            if (!_ctx.Orders.Any())
            {
                _ctx.Orders.AddRange(new List<Order> { order, order1 });
            }
            _ctx.SaveChanges();
            product.OrdersProducts.Add(new OrdersProducts { OrderId = order.Id, ProductId = product.Id });
            product.OrdersProducts.Add(new OrdersProducts { OrderId = order1.Id, ProductId = product.Id });
            var productImages = new ProductImage[]
            {
                    new ProductImage
                    {
                        Path = "/png/first.png",
                        ProductId = product.Id
                    }
            };
            var review = new Review[]
            {
                    new Review
                    {
                        Name = "Sergiy",
                        Rating = 5,
                        Text = "TEST REVIEW",
                        ProductId = product.Id,
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

    }
}
