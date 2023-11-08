using System.ComponentModel.DataAnnotations.Schema;

namespace APIProjetoBlog.Entities
{
    public class Posts
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Date { get; set; }

        [ForeignKey("Category")]
        public int CategoryFK { get; set; }
        public virtual Category Category { get; set; }
    }
}
