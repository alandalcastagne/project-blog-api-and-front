namespace APIProjetoBlog.Entities
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public virtual IList<Posts> Posts { get; set; }
    }
}
