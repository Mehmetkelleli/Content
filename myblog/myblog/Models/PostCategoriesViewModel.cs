using System.Collections.Generic;

namespace myblog.Models
{
    public class PostCategoriesViewModel
    {
        public List<Post> Posts { get; set; }
        public List<Category> Categories { get; set; }
    }
}
