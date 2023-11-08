using APIProjetoBlog.Entities;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace APIProjetoBlog.Controllers;

[ApiController]
[Route("[controller]")]
public class CategoryController : ControllerBase
{
    private readonly BlogContext _context;

    public CategoryController(BlogContext context)
    {
        _context = context;
    }

    [HttpPost("RegisterCategory")]
    public IActionResult RegisterCategory(Category category)
    {
        _context.Categories.Add(category);
        _context.SaveChanges();
        return Ok(category);
    }

    [HttpGet("GetAllCategories")]
    public IActionResult GetAllCategories()
    {
        var categories = _context.Categories.ToList();
        return Ok(categories);    
    }

}


