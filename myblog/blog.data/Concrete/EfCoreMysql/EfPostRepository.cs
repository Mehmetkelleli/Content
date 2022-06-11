using blog.data.Abstract;
using myblog.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace blog.data.Concrete.EfCoreMysql
{
    public class EfPostRepository :
        EfCoreGenericRepository<Post, MyBlogContext>, IPostRepository
    {
    }
}
