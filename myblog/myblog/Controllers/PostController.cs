using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using myblog.Models;
using System;
using System.Linq;

namespace myblog.Controllers
{
    public class PostController : Controller
    {


        public IActionResult Index()
        {
        //    using (var db = new MyblogContext())
        //    {
        //        var mwlist        = new PostCategoriesViewModel();
        //        mwlist.Categories = db.Categories.ToList();
        //        mwlist.Posts = db.Posts.ToList();
                return View();
        //    }
        }
        [HttpGet]
        public IActionResult PostAdd()
        {
            //using (var db = new MyblogContext())
            //{
            //    var liste = db.Categories.ToList();
            //    ViewBag.liste = new SelectList(liste,"Id","Name");
            return View(new Post() { });
            //}
        }
        [HttpPost]
        public IActionResult PostAdd(Post p)
        {
            //using (var db = new MyblogContext())
            //{
            //    try
            //    {
            //        db.Posts.Add(p);
            //        db.SaveChanges();
            return RedirectToAction("index", "root"); 
            //    }
            //    catch (System.Exception)
            //    {
            //        return View();
            //        throw;
            //    }
            //}
        }
        [HttpGet]
        public IActionResult PostUpdate(int id)
        {
            //using (var db = new MyblogContext())
            //{
            //    try
            //    {
            //        var post = db.Posts.FirstOrDefault(p => p.Id == id);
            //        var liste = db.Categories.ToList();
            //        ViewBag.liste = new SelectList(liste, "Id", "Name");
            return View();
            //    }
            //    catch (Exception)
            //    {

            //        throw;
            //    }
            //}
        }
        [HttpPost]
        public IActionResult PostUpdate(Post p)
        {
            //using (var db = new MyblogContext())
            //{
            //    try
            //    {
            //        var post = db.Posts.FirstOrDefault(c => c.Id == p.Id);
            //        post.Name        = p.Name;
            //        post.Description = p.Description;
            //        post.Picture     = p.Picture;
            //        post.Aktive      = p.Aktive;
            //        post.CAtegoryId  = p.CAtegoryId;
            //        db.SaveChanges();
            return RedirectToAction("index", "post");
                    
            //    }
            //    catch (Exception)
            //    {
            //        return View();
            //        throw;
            //    }
            //}
        }
        [HttpGet]
        public IActionResult Postdelete(int id)
        {
            //using (var db = new MyblogContext())
            //{
            //    try
            //    {
            //        var post = db.Posts.FirstOrDefault(c => c.Id == id);
            //        db.Posts.Remove(post);
            //        db.SaveChanges();
            return RedirectToAction("index", "post");

            //    }
            //    catch (Exception)
            //    {
            //        return View();
            //        throw;
            //    }
            //}
        }

    }
}
