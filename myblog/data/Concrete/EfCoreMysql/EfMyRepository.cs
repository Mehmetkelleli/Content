using blog.data.Abstract;
using myblog.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace blog.data.Concrete.EfCoreMysql
{
    public class EfMyRepository :
        EfCoreGenericRepository<My, MyBlogContext>, IMyRepository
    {

    }
}
