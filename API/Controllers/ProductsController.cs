
using ProductApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace ProductApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private static List<Product> _products = new List<Product>
        {
            new Product { Id = 1, Name = "Laptop", Price = 1200 },
            new Product { Id = 2, Name = "Headphones", Price = 100 }
        };

        [HttpGet]
        public IActionResult GetAll() => Ok(_products);

        [HttpGet("{id}")]
        public IActionResult GetById(int id) =>
            Ok(_products.FirstOrDefault(p => p.Id == id));

        [HttpPost]
        public IActionResult Create(Product product)
        {
            product.Id = _products.Count + 1;
            _products.Add(product);
            return Ok(product);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, Product product)
        {
            var existing = _products.FirstOrDefault(p => p.Id == id);
            if (existing == null) return NotFound();

            existing.Name = product.Name;
            existing.Price = product.Price;
            return Ok(existing);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var product = _products.FirstOrDefault(p => p.Id == id);
            if (product == null) return NotFound();

            _products.Remove(product);
            return Ok();
        }
    }
}
