using Microsoft.AspNetCore.Mvc;

using myblog.Models;
using System.Linq;

namespace myblog.Controllers
{   
    public class CategoryController : Controller
    {
        public IActionResult Index()
        {
            //using (var db = new MyblogContext())
            //{
            //    var categories = db.Categories.ToList();
            return View("categories");
            //}
        }
        [HttpGet]
        public IActionResult CategoryAdd()
        {
            return View(new Category() { });
        }
        [HttpPost]
       public IActionResult CategoryAdd(Category p)
        {
            //using (var db = new MyblogContext())
            //{
            //    try
            //    {
            //        db.Categories.Add(p);
            //        db.SaveChanges();
            //        return RedirectToAction("index", "root");
            //    }
            //    catch (System.Exception)
            //    {
            return View();
            //        throw;
            //    }
            //}
        }
        [HttpGet]
        public IActionResult CategoryDelete(int id)
        {
            //using (var db = new MyblogContext())
            //{
            //    try
            //    {
            //        var del = db.Categories.FirstOrDefault(p => p.Id == id);
            //        db.Categories.Remove(del);
            //        db.SaveChanges();
            //        return RedirectToAction("index","Category");
            //    }
            //    catch (System.Exception)
            //    {
            return View();
            //        throw;
            //    }
            //}
        }

        //update category
        [HttpGet]
        public IActionResult CategoryUpdate(int id)
        {
            //using (var db = new MyblogContext())
            //{
            //    try
            //    {
            //        var del = db.Categories.FirstOrDefault(p => p.Id == id);
            //        return View(del);
            //    }
            //    catch (System.Exception)
            //    {
            return View();
            //        throw;
            //    }
            //}
        }
        [HttpPost]
        public IActionResult CategoryUpdate(Category p)
        {
            //using (var db = new MyblogContext())
            //{
            //    try
            //    {
            //        var del = db.Categories.FirstOrDefault(p => p.Id == p.Id);
            //        del.Name = p.Name;
            //        db.SaveChanges();
            //        return RedirectToAction("index", "category");
            //    }
            //    catch (System.Exception)
            //    {
            return View();
            //        throw;
            //    }
            //}
        }

    }
}
