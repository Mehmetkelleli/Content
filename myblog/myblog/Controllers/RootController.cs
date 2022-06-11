

using Microsoft.AspNetCore.Mvc;
using myblog.Models;
using System.Collections.Generic;
using System.Linq;
using blog.data.Abstract;
using blog.data.Concrete.EfCoreMysql;

namespace myblog.Controllers
{
    public class RootController : Controller
    {
        private ISettingRepository _Setting;
        private IMyRepository _My;
        public RootController(ISettingRepository p,IMyRepository c)
        {
            this._Setting = p;
            this._My = c;
        }
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult Setting()
        {
            //using(var db = new MyblogContext())
            //{
            //    var s1 = new MySettingViewmodel();
            //    s1.setting = db.Settings.FirstOrDefault(p=>p.Id==1);
            //    s1.my = db.My.FirstOrDefault(p => p.Id == 1);
               return View();
            
        }
        [HttpPost]
        public IActionResult Setting(Setting p)
        {
            //using (var db = new MyblogContext())
            //{
            //    var sett             = db.Settings.FirstOrDefault(i => i.Id == p.Id);
            //    sett.Logo            = p.Logo;
            //    sett.Meta            = p.Meta;
            //    sett.HomePageTitle   = p.HomePageTitle;
            //    sett.HomePageContent = p.HomePageContent;
            //    db.SaveChanges();
            return RedirectToAction("index");

            //}
        }
        [HttpPost]
        public IActionResult UserSetting(My m)
        {
            //using (var db = new MyblogContext())
            //{
            //    var sett       = db.My.FirstOrDefault(i => i.Id == m.Id);
            //    sett.Name      = m.Name;
            //    sett.School    = m.School;
            //    sett.Job       = m.Job;
            //    sett.Facebook  = m.Facebook;
            //    sett.Wp        = m.Wp;
            //    sett.İnstagram = m.İnstagram;
            //    sett.İmgUrl    = m.İmgUrl;
            //    db.SaveChanges();
            return RedirectToAction("index");

            //}
        }
    }
}
