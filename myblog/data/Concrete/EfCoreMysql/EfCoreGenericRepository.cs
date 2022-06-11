using blog.data.Abstract;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace blog.data.Concrete.EfCoreMysql
{
    public class EfCoreGenericRepository<t, Context> : IGenericRepository<t>
        where t:class
        where Context:DbContext,new()
    {
        public void create(t t)
        {
            using (var db = new Context())
            {
                db.Set<t>().Add(t);
                db.SaveChanges();
            }
        }

        public t GetById(int id)
        {
            using (var db = new Context())
            {
                return db.Set<t>().Find(id);
            }
        }

        public List<t> GetList()
        {
            using (var db = new Context())
            {
                return db.Set<t>().ToList();
            }
        }

        public void update(t t)
        {
            using (var db = new Context())
            {
                db.Entry(t).State = EntityState.Modified;
                db.SaveChanges();
            }
        }
    }
}
