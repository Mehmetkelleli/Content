using Microsoft.AspNetCore.Mvc;

using myblog.Models;
using System.Linq;

namespace myblog.Controllers
{
    public class CvController : Controller
    {
        [HttpGet]
        public IActionResult Index()
        {
            //using (var db = new MyblogContext())
            //{
            //    try
            //    {
            return View();
            //    }
            //    catch (System.Exception)
            //    {
            //        return RedirectToAction("index", "root");
            //        throw;
            //    }
            //}
        }
        [HttpPost]
        public IActionResult Index(Cv c)
        {
            //using (var db = new MyblogContext())
            //{
            //    try
            //    {
            //        var update = db.Cv.FirstOrDefault(p => p.Id == c.Id);
            //        update.HeaderContent = c.HeaderContent;
            //        update.CvTitle       = c.CvTitle;
            //        update.CvContent     = c.CvTitle;
            //        db.SaveChanges();
            //        return RedirectToAction("index", "root");
            //    }
            //    catch (System.Exception)
            //    {
            //        return View();
            //        throw;
            //    }
            //}
            return View();
        }
    }
}
