using APIProjetoBlog.Entities;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace APIProjetoBlog.Controllers;

[ApiController]
[Route("[controller]")]
public class UserController : ControllerBase
{
    private readonly BlogContext _context;
    public UserController(BlogContext context)
    {
        _context = context;
    }

    [HttpGet("{login}/{password}")]
    public IActionResult GetUserAndPassword(string login, string password)
    {
        var query = from users in _context.Users
                    where users.Password == password && users.Login == login
                    select users.Login;

        if (query.Any()){
            return Ok(query);            
        }
        else{
            return NotFound();
        }
    }
}
