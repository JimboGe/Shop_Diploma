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
        private static List<Brand> brands = new List<Brand>();
        private static List<Category> categories = new List<Category>();
        private static List<SizeImage> sizeImages = new List<SizeImage>();
        private static List<Product> products = new List<Product>();
        private static List<ProductImage> images = new List<ProductImage>();

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
        public static void SeedBrands(EFDbContext _ctx)
        {
            brands = new List<Brand>
            {    new Brand{Name = "Nike"},
                 new Brand{Name = "Adidas"},
                 new Brand{Name = "Puma"},
                 new Brand{Name = "Gard"}
            };
            if (!_ctx.Brands.Any())
            {
                _ctx.Brands.AddRange(brands);
            }
        }
        public static void SeedCategories(EFDbContext _ctx)
        {
            categories = new List<Category>
            {
                new Category
                {
                    Name="outerwear"
                },
                new Category
                {
                    Name="jeens"
                },
                new Category
                {
                    Name="jeens-shorts"
                },
                new Category
                {
                    Name="t-shirts"
                },
                new Category
                {
                    Name="shorts"
                },
                new Category
                {
                    Name="sport-trousers"
                },
                new Category
                {
                    Name="sport-sweatshirts"
                },
                new Category
                {
                    Name="sport-costumes"
                },
                new Category
                {
                    Name="jackets"
                },
                new Category
                {
                    Name="anoraki"
                },
                new Category
                {
                    Name="sweatshirts"
                },
                new Category
                {
                    Name="shirts"
                },
                new Category
                {
                    Name="backpacks-bags"
                },
                new Category
                {
                    Name="bananki"
                },
                new Category
                {
                    Name="backpacks"
                },
                 new Category
                {
                    Name="bags-on-the-shoulder"
                },
                  new Category
                {
                    Name="sport-bags"
                },
                   new Category
                {
                    Name="accessories"
                },
                 new Category
                {
                    Name="baseball-caps"
                },
                 new Category
                {
                    Name="wallets"
                },
                 new Category
                {
                    Name="belts"
                },
                 new Category
                {
                    Name="hats"
                },
                 new Category
                {
                    Name="socks"
                },
                 new Category
                {
                    Name="shoes"
                },
                 new Category
                {
                    Name="kedi"
                },
                 new Category
                {
                    Name="sneakers"
                },
                 new Category
                {
                    Name="chereviki"
                },
                new Category
                {
                    Name="mokasins"
                },
               new Category
                {
                    Name="tufli"
                },
                new Category
                {
                    Name="dress"
                },
                new Category
                {
                    Name="skirts"
                }
            };
            if (!_ctx.Categories.Any())
            {
                _ctx.Categories.AddRange(categories);
            }
        }
        public static void SeedImageSize(EFDbContext _ctx)
        {
            sizeImages = new List<SizeImage>
            {
                new SizeImage
                {
                     CategoryName = "shoes",
                     Path = "https://gard.com.ua/image/catalog/shop/STRU_aea1bb99-cb02-11e9-af8a-9e1680149fdf.jpg"
                },
                new SizeImage
                {
                      CategoryName = "bags-on-the-shoulder",
                      Path = "https://gard.com.ua/image/catalog/shop/STRU_60e117a3-bcf2-11e9-af8a-9e1680149fdf.jpg"
                },
                new SizeImage
                {
                      CategoryName = "weather",
                      Path = "https://gard.com.ua/image/catalog/shop/STRU_aea1bb99-cb02-11e9-af8a-9e1680149fdf.jpg"
                },
                new SizeImage
                {
                      CategoryName = "bananki",
                      Path = "https://gard.com.ua/image/catalog/shop/STRU_3a1309ab-ea63-11e9-95fd-9e1680149fdf.jpg"
                },
                 new SizeImage
                {
                      CategoryName = "backpacks",
                      Path = "https://gard.com.ua/image/catalog/shop/STRU_6b63545c-e8d8-11e9-95fd-9e1680149fdf.jpg"
                },
                   new SizeImage
                {
                      CategoryName = "trousers",
                      Path = "https://gard.com.ua/image/catalog/shop/STRU_c7376c06-d49b-11e9-af8a-9e1680149fdf.jpg"
                },
                new SizeImage
                {
                   CategoryName = "backpacksROLLTOP",
                   Path = "https://gard.com.ua/image/catalog/shop/STRU_41bc2aca-a7ba-11e9-af8a-9e1680149fdf.jpg"
                },
                new SizeImage
                {
                   CategoryName = "none",
                   Path = ""
                },
            };
            if (!_ctx.SizeImages.Any())
            {
                _ctx.SizeImages.AddRange(sizeImages);
            }
        }
        public static void SeedProducts(EFDbContext _ctx)
        {
            //рюкзаки
            products = new List<Product>{
                new Product
                {
                    Name = "Рюкзак CITY| чорна хвиля 4/19",
                    Description = "Універсальний рюкзак, Який розміром трохи менше нашого рюкзака BACKPACK-2. Компактний, але в той же час місткий. Однаково стильно буде виглядати як на чоловічих, так і на жіночих плечах. Велике основне відділення з кишенею для ноутбука (діагональ до 14). Зовнішній кишеню на блискавки. Зовні розташовані два еластичних бічних кишені з сітки. Дно рюкзака ущільнено. М'які регульовані лямки і спинка Оснащені високоякісної вентильованого сіткою 3D Air Mesh.",
                    Price = 420,
                    SizeImageId = sizeImages.Where(x=>x.CategoryName == "backpacks").Select(x=>x.Id).First(),
                    Gender = "man",
                    BrandId = brands.Where(x=>x.Name == "Gard").Select(x=>x.Id).First(),
                    Color = "black",
                    Count = 20,
                    Size = null,
                    CategoryId = categories.Where(x=>x.Name == "backpacks").Select(x=>x.Id).First()
                },
                new Product
                {
                    Name = "Рюкзак CITY| банани 4/19",
                    Description = "Універсальний рюкзак, Який розміром трохи менше нашого рюкзака BACKPACK-2. Компактний, але в той же час місткий. Однаково стильно буде виглядати як на чоловічих, так і на жіночих плечах. Велике основне відділення з кишенею для ноутбука (діагональ до 14). Зовнішній кишеню на блискавки. Зовні розташовані два еластичних бічних кишені з сітки. Дно рюкзака ущільнено. М'які регульовані лямки і спинка Оснащені високоякісної вентильованого сіткою 3D Air Mesh.",
                    Price = 420,
                    SizeImageId = sizeImages.Where(x=>x.CategoryName == "backpacks").Select(x=>x.Id).Single(),
                    Gender = "man",
                    BrandId = brands.Where(x=>x.Name == "Gard").Select(x=>x.Id).First(),
                    Color = "yellow",
                    Count = 12,
                    Size = null,
                    CategoryId = categories.Where(x=>x.Name == "backpacks").Select(x=>x.Id).First()
                },
                new Product
                {
                    Name = "Рюкзак BACKPACK-2 |  4/19",
                    Description = "Унікальна модель рюкзака, який поєднує в собі неймовірну місткість і в той же час акуратність завдяки оптимальній кількості деталей. Виготовлений з дуже міцного поліестеру з водовідштовхувальними властивостями. Усередині основного відділення на замку знаходиться кишеню для ноутбука (діагоналлю до 15.6) на липучці. Ще один великий кишеню на блискавки зовні. З боків рюкзака розташовані два еластичних кишені з сітки. М'які регульовані лямки. Нашивка і пуллер з натуральної шкіри. Універсальний рюкзак ідеально підходить для повсякденного використання, а також, завдяки великому обсягу, для подорожей.",
                    Price = 440,
                    SizeImageId = sizeImages.Where(x=>x.CategoryName == "backpacks").Select(x=>x.Id).First(),
                    Gender = "man",
                    BrandId = brands.Where(x=>x.Name == "Gard").Select(x=>x.Id).Single(),
                    Color = "blue",
                    Count = 3,
                    Size = null,
                    CategoryId = categories.Where(x=>x.Name == "backpacks").Select(x=>x.Id).First()
                },
                new Product
                {
                    Name = "Рюкзак CORE | градієнт 3/19",
                    Description = "Зручна модель рюкзака типу роллтоп стане в нагоді і в місті, і за його межами. Унікальна застібка основного кишені затягується ззаду, завдяки цьому стропа щільно прилягає до рюкзака і не стукає при ходьбі і бігу!. Анатомічні, м'які ручки прошиті спеціальної 3D сіткою Air Mesh, що дозволить зручно носити рюкзак",
                    Price = 650,
                    SizeImageId = sizeImages.Where(x=>x.CategoryName == "backpacksROLLTOP").Select(x=>x.Id).First(),
                    Gender = "man",
                    BrandId = brands.Where(x=>x.Name == "Gard").Select(x=>x.Id).First(),
                    Color = "blue",
                    Count = 3,
                    Size = null,
                    CategoryId = categories.Where(x=>x.Name == "backpacks").Select(x=>x.Id).First()
                },
                new Product
                {
                    Name = "Сумка MINI REFLECTIVE 3 | 3/19",
                    Description = "Сумка виконана з якісної поліестерової тканини, яка не боїться вологи і перепадів температур. Основне відділення на блискавці має 3 внутрішніх кишені різних розмірів для дрібниць. Ще один кишеню на блискавки знаходиться на лицьовій стороні. Підкладка: 100% поліестер. Ремінь - якісна стропа шириною 3 см. Довжина ременя регулюється, максимальна - 140 см. На лицьовій стороні рефлективний логотип. Пуллер із пластику максимально зручні у використанні. Аксесуар, завдяки якому найнеобхідніші речі завжди будуть з Вами, просто незамінний в повсякденному житті. Сумка відмінно підійде для портмоне, планшета, телефону або блокнота формату А5, а також різної дрібниці.",
                    Price = 230,
                    SizeImageId = sizeImages.Where(x=>x.CategoryName == "bags-on-the-shoulder").Select(x=>x.Id).First(),
                    Gender = "man",
                    BrandId = brands.Where(x=>x.Name == "Gard").Select(x=>x.Id).First(),
                    Color = "black",
                    Count = 12,
                    Size = null,
                    CategoryId = categories.Where(x=>x.Name == "bags-on-the-shoulder").Select(x=>x.Id).First()
                },
                new Product
                {
                    Name = "Сумка MESSENGER | 3/19",
                    Description = "Сумка через плече COPYLEATHER зроблена спеціально під зошит стандартних розмірів! Мессенджер став незамінним в повсякденному застосуванні, ідеально підійде для студентів і просто будь-якого активній людині. Основна частина сумочки виконана з якісної поліестерової тканини, яка не боїться вологи і перепадів температур, низ вироби з еко-шкіри щільної і надміцної, також цей матеріал ми використовуємо для ущільнення дна рюкзаків. Основне відділення на блискавці має 2 внутрішніх кишені. На лицьовій стороні кишеню на блискавки. Підкладка: 100% поліестер. Ремінь - якісна стропа шириною 3 см. Довжина ременя регулюється, максимальна 140 см. Пуллер із пластику допоможуть зручно відкривати замки сумочки.",
                    Price = 240,
                    SizeImageId = sizeImages.Where(x=>x.CategoryName == "bags-on-the-shoulder").Select(x=>x.Id).First(),
                    Gender = "man",
                    BrandId = brands.Where(x=>x.Name == "Gard").Select(x=>x.Id).First(),
                    Color = "black",
                    Count = 13,
                    Size = null,
                    CategoryId = categories.Where(x=>x.Name == "bags-on-the-shoulder").Select(x=>x.Id).First()
                },
                new Product
                {
                    Name = "Сумка на пояс | 4/19",
                    Description = "Поясна сумка виконана з якісної поліестерової тканини, яка не боїться вологи і перепадів температур. Має 4 кишені на блискавці: три зовнішніх і один внутрішній. Підкладка: 100% поліестер. Ремінь - якісна стропа шириною 4 см, дозволяє зафіксувати сумку в потрібному положенні. Довжина ременя регулюється, максимальний обхват 120 см. Незамінний в повсякденному житті аксесуар підійде кожному і стане не тільки красивим, але і практичним доповненням до Вашого образу.",
                    Price = 220,
                    SizeImageId = sizeImages.Where(x=>x.CategoryName == "bananki").Select(x=>x.Id).First(),
                    Gender = "man",
                    BrandId = brands.Where(x=>x.Name == "Gard").Select(x=>x.Id).First(),
                    Color = "black",
                    Count = 13,
                    Size = null,
                    CategoryId = categories.Where(x=>x.Name == "bananki").Select(x=>x.Id).First()
                },
                new Product
                {
                    Name = "Сумка на пояс | 4/19",
                    Description = "Поясна сумка виконана з якісної поліестерової тканини, яка не боїться вологи і перепадів температур. Має 4 кишені на блискавці: три зовнішніх і один внутрішній. Підкладка: 100% поліестер. Ремінь - якісна стропа шириною 4 см, дозволяє зафіксувати сумку в потрібному положенні. Довжина ременя регулюється, максимальний обхват 120 см. Незамінний в повсякденному житті аксесуар підійде кожному і стане не тільки красивим, але і практичним доповненням до Вашого образу.",
                    Price = 225,
                    SizeImageId = sizeImages.Where(x=>x.CategoryName == "bananki").Select(x=>x.Id).First(),
                    Gender = "man",
                    BrandId = brands.Where(x=>x.Name == "Gard").Select(x=>x.Id).First(),
                    Color = "black",
                    Count = 13,
                    Size = null,
                    CategoryId = categories.Where(x=>x.Name == "bananki").Select(x=>x.Id).First()
                },
                new Product
                {
                    Name = "Сумка на пояс | 3/19",
                    Description = "Поясна сумка STINGER ущільнена з обох сторін піноматеріалом, тому добре тримає форму, також вона виконана з якісної еко-шкіри, яка не боїться вологи і перепадів температур. Два відділення на блискавці, а також правильна форма дозволять відмінно розподілити всі необхідні речі всередині. Підкладка: 100% поліестер. Ремінь - широка, дуже міцна стропа, яка фіксується за допомогою якісного фастекса.",
                    Price = 255,
                    SizeImageId = sizeImages.Where(x=>x.CategoryName == "bananki").Select(x=>x.Id).First(),
                    Gender = "man",
                    BrandId = brands.Where(x=>x.Name == "Gard").Select(x=>x.Id).First(),
                    Color = "orange",
                    Count = 1,
                    Size = null,
                    CategoryId = categories.Where(x=>x.Name == "bananki").Select(x=>x.Id).First()
                },
                new Product
                {
                    Name = "Membrana PROTECT | 3/19",
                    Description = "Поясна сумка STINGER ущільнена з обох сторін піноматеріалом, тому добре тримає форму, також вона виконана з якісної еко-шкіри, яка не боїться вологи і перепадів температур. Два відділення на блискавці, а також правильна форма дозволять відмінно розподілити всі необхідні речі всередині. Підкладка: 100% поліестер. Ремінь - широка, дуже міцна стропа, яка фіксується за допомогою якісного фастекса.",
                    Price = 1056,
                    Gender = "man",
                    BrandId = brands.Where(x=>x.Name == "Gard").Select(x=>x.Id).First(),
                    Color = "blue",
                    Count = 2,
                    Size = "S",
                    SizeImageId = sizeImages.Where(x=>x.CategoryName == "none").Select(x=>x.Id).First(),
                    CategoryId = categories.Where(x=>x.Name == "outerwear").Select(x=>x.Id).First()
                },
                new Product
                {
                    Name = "Куртка Демісезоннa | 3/19",
                    Description = "Демісезоннa куртка з міцної водовідштовхувальним тканини, але в той же час тканина дихає і не парить. Анатомічний, продуманий крій дозволить відчувати себе комфортно. Усередині прошитий до верхньої тканини утеплювач нового покоління holosoft 100, це дозволить носити річ від + 15 ° C до -0 ° C, в комфортному режимі. Саме ці якості настільки важливі для перехідного періоду, коли потрібно щоб куртка не парила і зігрівала.",
                    Price = 656,
                    Gender = "man",
                    BrandId = brands.Where(x=>x.Name == "Gard").Select(x=>x.Id).First(),
                    Color = "black",
                    Count = 5,
                    Size = "XL",
                    SizeImageId = sizeImages.Where(x=>x.CategoryName == "none").Select(x=>x.Id).First(),
                    CategoryId = categories.Where(x=>x.Name == "outerwear").Select(x=>x.Id).First()
                },
                new Product
                {
                    Name = "Зимові черевики | Койот 4/19",
                    Description = "",
                    Price = 1190,
                    Gender = "man",
                    BrandId = brands.Where(x=>x.Name == "Gard").Select(x=>x.Id).First(),
                    Color = "orange",
                    Count = 5,
                    Size = "41",
                    SizeImageId = sizeImages.Where(x=>x.CategoryName == "shoes").Select(x=>x.Id).First(),
                    CategoryId = categories.Where(x=>x.Name == "chereviki").Select(x=>x.Id).First()
                },
                new Product
                {
                    Name = "Кросівки| замша 3/18",
                    Description = "Верх: Натуральна замша. Підкладка: Натуральна шкіра + текстильний матеріал. Підошва: Поліуретан (ПУ)",
                    Price = 890,
                    Gender = "man",
                    BrandId = brands.Where(x=>x.Name == "Gard").Select(x=>x.Id).First(),
                    Color = "black",
                    Count = 5,
                    Size = "44",
                    SizeImageId = sizeImages.Where(x=>x.CategoryName == "shoes").Select(x=>x.Id).First(),
                    CategoryId = categories.Where(x=>x.Name == "sneakers").Select(x=>x.Id).First()
                },
                new Product
                {
                    Name = "Кеди| 3/19",
                    Description = "Матеріал - еко-шкіра. Якісна поліуретанова підошва. Дані кеди найкраще поєднувати з штанами чінос або джинсами трохи звуженого крою.",
                    Price = 580,
                    Gender = "man",
                    BrandId = brands.Where(x=>x.Name == "Gard").Select(x=>x.Id).First(),
                    Color = "black",
                    Count = 5,
                    Size = "44",
                    SizeImageId = sizeImages.Where(x=>x.CategoryName == "shoes").Select(x=>x.Id).First(),
                    CategoryId = categories.Where(x=>x.Name == "kedi").Select(x=>x.Id).First()
                },
                new Product
                {
                    Name = "Ремень хакі| 2/19",
                    Description = "Текстильний ремінь-стропа - це сучасний варіант ременя, перевагами якого є міцність, довговічність, зручність, стильність і досконала універсальність. Цей аксесуар відмінно підійде саме Вам, так як його довжина легко регулюється від самої мінімальної до 110см в обсязі. Металева пряжка міцно фіксує ремінь. Ширина стропи - 4 см. Крім цього ремінь-стропа підходить для будь-якого гардероба, він добре поєднується з штанами і шортами найрізноманітніших фасонів і підходить до всіх стилів одягу.",
                    Price = 220,
                    Gender = "man",
                    BrandId = brands.Where(x=>x.Name == "Gard").Select(x=>x.Id).First(),
                    Color = "green",
                    Count = 5,
                    Size = "",
                    SizeImageId = sizeImages.Where(x=>x.CategoryName == "none").Select(x=>x.Id).First(),
                    CategoryId = categories.Where(x=>x.Name == "belts").Select(x=>x.Id).First()
                },
                new Product
                {
                    Name = "Спортивні штани | 4/19",
                    Description = "Чоловічі спортивні штани з натурального котону з додаванням 5% еластана для довговічності тканини. Зручні бічні кишені на водонепроникної блискавки. Збоку силіконова бирка з логотипом. Внизу - широкі еластичні манжети. Еластичний пояс з внутрішнім шнурком забезпечує зручну індивідуальну посадку. Відмінно підійдуть як для літа, так і на демісезонний період.",
                    Price = 420,
                    Gender = "man",
                    BrandId = brands.Where(x=>x.Name == "Gard").Select(x=>x.Id).First(),
                    Color = "white",
                    Count = 5,
                    Size = "L",
                    SizeImageId = sizeImages.Where(x=>x.CategoryName == "trousers").Select(x=>x.Id).First(),
                    CategoryId = categories.Where(x=>x.Name == "sport-trousers").Select(x=>x.Id).First()
                },
                new Product
                {
                    Name = "Зимова шапка | 4/18",
                    Description = "Розмір: універсальний.Склад: 50% вовна, 50% акрил.Сезон: зима.Сірий колір.Шапка виконана з м'якого трикотажу. Деталі: щільна в'язка, широкий відворот, шкіряна нашивка з логотипом бренду.",
                    Price = 220,
                    Gender = "woman",
                    BrandId = brands.Where(x=>x.Name == "Gard").Select(x=>x.Id).First(),
                    Color = "grey",
                    Count = 5,
                    Size = "",
                    SizeImageId = sizeImages.Where(x=>x.CategoryName == "none").Select(x=>x.Id).First(),
                    CategoryId = categories.Where(x=>x.Name == "hats").Select(x=>x.Id).First()
                }
            };
            if (!_ctx.Products.Any()) {
                _ctx.Products.AddRange(products);
                SeedProductImages(_ctx);
            }
        }
        public static void SeedProductImages(EFDbContext _ctx)
        {

            images = new List<ProductImage>
            {
                new ProductImage
                {
                    Path = "https://gard.com.ua/image/cache/catalog/shop/products/6b635465-e8d8-11e9-95fd-9e1680149fdf-930x1240.jpg",
                    ProductId = products[0].Id
                },
                new ProductImage
                {
                    Path = "https://gard.com.ua/image/cache/catalog/shop/products/6b63545e-e8d8-11e9-95fd-9e1680149fdf-930x1240.jpg",
                    ProductId = products[1].Id
                },
                new ProductImage
                {
                    Path = "https://gard.com.ua/image/cache/catalog/shop/products/6b635459-e8d8-11e9-95fd-9e1680149fdf-930x1240.jpg",
                    ProductId = products[2].Id
                },
                new ProductImage
                {
                    Path = "https://gard.com.ua/image/cache/catalog/shop/products/c57ca2be-e741-11e9-95fd-9e1680149fdf-930x1240.jpg",
                    ProductId = products[3].Id
                },
                new ProductImage
                {
                    Path = "https://gard.com.ua/image/cache/catalog/shop/products/e1b6d26b-ea8b-11e9-95fd-9e1680149fdf-930x1240.jpg",
                    ProductId = products[4].Id
                },
                new ProductImage
                {
                    Path = "https://gard.com.ua/image/cache/catalog/shop/products/e1b6d26d-ea8b-11e9-95fd-9e1680149fdf-930x1240.jpg",
                    ProductId = products[4].Id
                },
                new ProductImage
                {
                    Path = "https://gard.com.ua/image/cache/catalog/shop/products/53b72068-e353-11e9-95fd-9e1680149fdf-930x1240.jpg",
                    ProductId = products[5].Id
                },
                new ProductImage
                {
                    Path = "https://gard.com.ua/image/cache/catalog/shop/products/075ba0e6-e5be-11e9-95fd-9e1680149fdf-930x1240.jpg",
                    ProductId = products[5].Id
                },
                new ProductImage
                {
                    Path = "https://gard.com.ua/image/cache/catalog/shop/products/3a1309ad-ea63-11e9-95fd-9e1680149fdf-930x1240.jpg",
                    ProductId = products[6].Id
                },
                new ProductImage
                {
                    Path = "https://gard.com.ua/image/cache/catalog/shop/products/cf9a106e-e280-11e9-95fd-9e1680149fdf-930x1240.jpg",
                    ProductId = products[7].Id
                },
                new ProductImage
                {
                    Path = "https://gard.com.ua/image/cache/catalog/shop/products/cf9a106c-e280-11e9-95fd-9e1680149fdf-930x1240.jpg",
                    ProductId = products[8].Id
                },
                new ProductImage
                {
                    Path = "https://gard.com.ua/image/cache/catalog/shop/products/6def0457-e443-11e9-95fd-9e1680149fdf-930x1240.jpg",
                    ProductId = products[8].Id
                },
                new ProductImage
                {
                    Path = "https://gard.com.ua/image/cache/catalog/shop/products/739d38b8-d32a-11e9-af8a-9e1680149fdf-930x1240.jpg",
                    ProductId = products[9].Id
                },
                new ProductImage
                {
                    Path = "https://gard.com.ua/image/cache/catalog/shop/products/739d38b6-d32a-11e9-af8a-9e1680149fdf-930x1240.jpg",
                    ProductId = products[9].Id
                },
                new ProductImage
                {
                    Path = "https://gard.com.ua/image/cache/catalog/shop/products/739d38b9-d32a-11e9-af8a-9e1680149fdf-930x1240.jpg",
                    ProductId = products[9].Id
                },
                new ProductImage
                {
                    Path = "https://gard.com.ua/image/cache/catalog/shop/products/739d38b7-d32a-11e9-af8a-9e1680149fdf-930x1240.jpg",
                    ProductId = products[9].Id
                },
                new ProductImage
                {
                    Path = "https://gard.com.ua/image/cache/catalog/shop/products/c3f8afb9-d6a8-11e8-ab13-ee24cb1b971f-930x1240.jpg",
                    ProductId = products[10].Id
                },
                new ProductImage
                {
                    Path = "https://gard.com.ua/image/cache/catalog/shop/products/c3f8afbd-d6a8-11e8-ab13-ee24cb1b971f-930x1240.jpg",
                    ProductId = products[10].Id
                },
                new ProductImage
                {
                    Path = "https://gard.com.ua/image/cache/catalog/shop/products/6b635446-e8d8-11e9-95fd-9e1680149fdf-930x1240.jpg",
                    ProductId = products[11].Id
                },
                new ProductImage
                {
                    Path = "https://gard.com.ua/image/cache/catalog/shop/products/e1b6d273-ea8b-11e9-95fd-9e1680149fdf-930x1240.jpg",
                    ProductId = products[11].Id
                },
                new ProductImage
                {
                    Path = "https://gard.com.ua/image/cache/catalog/shop/products/6e02da88-d3a0-11e8-ab13-ee24cb1b971f-930x1240.jpg",
                    ProductId = products[12].Id
                },
                new ProductImage
                {
                    Path = "https://gard.com.ua/image/cache/catalog/shop/products/6e02da8a-d3a0-11e8-ab13-ee24cb1b971f-930x1240.jpg",
                    ProductId = products[12].Id
                },
                new ProductImage
                {
                    Path = "https://gard.com.ua/image/cache/catalog/shop/products/abfa2205-cd57-11e9-af8a-9e1680149fdf-930x1240.jpg",
                    ProductId = products[13].Id
                },
                new ProductImage
                {
                    Path = "https://gard.com.ua/image/cache/catalog/shop/products/abfa2206-cd57-11e9-af8a-9e1680149fdf-930x1240.jpg",
                    ProductId = products[13].Id
                },
                new ProductImage
                {
                    Path = "https://gard.com.ua/image/cache/catalog/shop/products/4743aa3a-64cb-11e9-af82-9e1680149fdf-930x1240.jpg",
                    ProductId = products[14].Id
                },
                new ProductImage
                {
                    Path = "https://gard.com.ua/image/cache/catalog/shop/products/629d4582-e92b-11e9-95fd-9e1680149fdf-930x1240.jpg",
                    ProductId = products[15].Id
                },
                new ProductImage
                {
                    Path = "https://gard.com.ua/image/cache/catalog/shop/products/629d457e-e92b-11e9-95fd-9e1680149fdf-930x1240.jpg",
                    ProductId = products[15].Id
                },
                new ProductImage
                {
                    Path = "https://gard.com.ua/image/cache/catalog/shop/products/44162cd4-d7a3-11e8-ab13-ee24cb1b971f-930x1240.jpg",
                    ProductId = products[16].Id
                }
            };
            _ctx.ProductImages.AddRange(images);
        }
        public static void Seed(EFDbContext _ctx)
        {
            SeedBrands(_ctx);
            SeedCategories(_ctx);
            SeedImageSize(_ctx);
            SeedProducts(_ctx);
            _ctx.SaveChanges();
        }

    }
}
