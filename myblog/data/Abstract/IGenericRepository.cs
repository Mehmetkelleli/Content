using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace blog.data.Abstract
{
    public interface IGenericRepository<t>
    {
        void create(t t);
        void update(t t);
        t GetById(int id);
        List<t> GetList();
    }
}
