using Microsoft.EntityFrameworkCore;
using myblog.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace blog.data.Concrete.EfCoreMysql
{
    public class MyBlogContext:DbContext
    {
        public DbSet<Category> Categories { get; set; }
        public DbSet<Cv> Cv { get; set; }
        public DbSet<My> My { get; set; }
        public DbSet<Post> Posts { get; set; }
        public DbSet<Setting> Settings { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySql("server=localhost;port=3306;database=myblog123;user=root;password=12345678;", new MySqlServerVersion(new System.Version(8, 0, 0)));
        }
    }
}
