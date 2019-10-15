using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Shop_Diploma.DAL;
using Shop_Diploma.DAL.Entities;
using Shop_Diploma.ViewModels;

namespace Shop_Diploma.Controllers
{
    [Route("/api/[controller]/[action]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly EFDbContext _ctx;
        public OrdersController(EFDbContext ctx)
        {
            _ctx = ctx;
        }
        // GET: api/Orders
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Order>>> All()
        {
            var orders = await _ctx.Orders.Include(c => c.OrdersProducts).ThenInclude(sc => sc.Product).ToListAsync();
            foreach(var o in orders)
            {
                o.FullPrice = o.OrdersProducts.Sum(x=>x.Product.Price);
            }
            
            if (orders != null)
            {
                return Ok(orders.GroupBy(x => x.Id));
            }
            return BadRequest("Не найдено заказів");
        }

        // GET: api/Orders/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Orders
        [HttpPost]
        public async Task<IActionResult> NewOrder([FromBody] OrderViewModel order)
        {
            var newOrder = new Order
            {
                Date = DateTime.Now,
                FullPrice = order.FullPrice
            };
            newOrder.OrdersProducts.Add(new OrdersProducts { OrderId = newOrder.Id, ProductId = order.Product.Id});
            await _ctx.Orders.AddAsync(newOrder);
            await _ctx.SaveChangesAsync();
            return Ok("Ваш заказ успішно прийнято!");
        }

        // PUT: api/Orders/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
