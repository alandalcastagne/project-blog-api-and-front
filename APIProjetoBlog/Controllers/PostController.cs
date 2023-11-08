using APIProjetoBlog.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting;

namespace APIProjetoBlog.Controllers;

    
[ApiController]
[Route("[controller]")]
public class PostController : ControllerBase
{
    private readonly BlogContext _context;

    public PostController(BlogContext context)
    {
        _context = context;
    }



    [HttpPost("RegisterPost")]
    public IActionResult RegisterPost(Posts post)
    {
        _context.Posts.Add(post);
        _context.SaveChanges();
        return Ok(post);
    }

    [HttpGet("GetById")]
    public IActionResult GetById(int id)
    {
        var posts = _context.Posts.Find(id);
        return Ok(posts);
    }

    [HttpGet("GetAllPosts")]
    public IActionResult GetAllPosts() {
       var posts = _context.Posts.ToList();
       return Ok(posts);
    }

    [HttpGet("GetByCategorie")]
    public IActionResult GetByCategorie(int category)
    {
        var query = (from posts in _context.Posts.Where(a => a.CategoryFK == category)
                     join categories in _context.Categories on posts.CategoryFK equals categories.Id 
                     select new { Title = posts.Title, Description = posts.Description, Categorie = categories.Name, Date = posts.Date, Id = posts.Id }).OrderByDescending(x => x.Date).ToList();

        return Ok(query);
    }

    [HttpGet("GetAllPostsWithCategorieAndDate")]
    public IActionResult GetAllPostsWithCategorieAndDate()
    {
        var query = (from posts in _context.Posts
                     join categories in _context.Categories on posts.CategoryFK equals categories.Id
                     select new { Title = posts.Title, Description = posts.Description, Categorie = categories.Name, Date = posts.Date, Id = posts.Id }).OrderByDescending(x => x.Date).ToList();

        return Ok(query);
    }

    [HttpPut("EditPostById")]
    public IActionResult Atualizar (int id, Posts post)
    {
        var postOnTheDatabase = _context.Posts.Find(id);

        if (post == null){
            return NotFound();
        }

        postOnTheDatabase.Title = post.Title;
        postOnTheDatabase.Description = post.Description;
        postOnTheDatabase.Category = post.Category;

        _context.Posts.Update(postOnTheDatabase);
        _context.SaveChanges();

        return Ok(postOnTheDatabase);
    }

    [HttpDelete("DeletePostById")]
    public IActionResult Deletar(int id)
    {
        var postToDelete = _context.Posts.Find(id);

        if (postToDelete == null)
            return NotFound();

        _context.Posts.Remove(postToDelete);
        _context.SaveChanges();
        return NoContent();
    }
}

