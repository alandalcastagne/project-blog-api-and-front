using APIProjetoBlog.Entities;
using Microsoft.EntityFrameworkCore;

public class BlogContext : DbContext
{
    public BlogContext(DbContextOptions options) : base(options)
    {

    }

    public DbSet<User> Users { get; set; }
    public DbSet<Category> Categories { get; set; }
    public DbSet<Posts> Posts { get; set; }
}