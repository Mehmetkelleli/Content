#pragma checksum "C:\Users\Mehmet Kelleli\Desktop\myblog\myblog\myblog\Views\Post\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "1ac1e60ef53ee94689cbec90f97b6b0c59de6a11"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Post_Index), @"mvc.1.0.view", @"/Views/Post/Index.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "C:\Users\Mehmet Kelleli\Desktop\myblog\myblog\myblog\Views\_ViewImports.cshtml"
using myblog;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Users\Mehmet Kelleli\Desktop\myblog\myblog\myblog\Views\_ViewImports.cshtml"
using myblog.Models;

#line default
#line hidden
#nullable disable
#nullable restore
#line 4 "C:\Users\Mehmet Kelleli\Desktop\myblog\myblog\myblog\Views\_ViewImports.cshtml"
using Microsoft.EntityFrameworkCore;

#line default
#line hidden
#nullable disable
#nullable restore
#line 5 "C:\Users\Mehmet Kelleli\Desktop\myblog\myblog\myblog\Views\_ViewImports.cshtml"
using System.Collections.Generic;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"1ac1e60ef53ee94689cbec90f97b6b0c59de6a11", @"/Views/Post/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"7294f6c81f02ea6795bd0b77adfff5c5ec2ece81", @"/Views/_ViewImports.cshtml")]
    #nullable restore
    public class Views_Post_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<PostCategoriesViewModel>
    #nullable disable
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n");
#nullable restore
#line 2 "C:\Users\Mehmet Kelleli\Desktop\myblog\myblog\myblog\Views\Post\Index.cshtml"
  
    ViewData["Title"] = "Index";
    Layout = "~/Views/Shared/_Layout.cshtml";

#line default
#line hidden
#nullable disable
            WriteLiteral(@"           <div class=""card col-12"">
              <div class=""card-header"">
                <h3 class=""card-title"">Posts Table</h3>
              </div>
              <!-- /.card-header -->
              <div class=""card-body"">
                <table class=""table table-bordered"">
                  <thead>
                    <tr>
                      <th>Picture</th>
                      <th>Name</th>
                      <th>Categories</th>
                      <th>Aktive Slider</th>
                      <th colspan=""2"">Procces</th>
                    </tr>
                  </thead>
                  <tbody>
");
#nullable restore
#line 24 "C:\Users\Mehmet Kelleli\Desktop\myblog\myblog\myblog\Views\Post\Index.cshtml"
                    foreach (var item in Model.Posts)
                  {

#line default
#line hidden
#nullable disable
            WriteLiteral("                      <tr>\r\n                          <td><img class=\"m-1\" width=\"50\"");
            BeginWriteAttribute("src", " src=\"", 925, "\"", 944, 1);
#nullable restore
#line 27 "C:\Users\Mehmet Kelleli\Desktop\myblog\myblog\myblog\Views\Post\Index.cshtml"
WriteAttributeValue("", 931, item.Picture, 931, 13, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral("></td>\r\n                          <td>");
#nullable restore
#line 28 "C:\Users\Mehmet Kelleli\Desktop\myblog\myblog\myblog\Views\Post\Index.cshtml"
                         Write(item.Name);

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n                          <td>");
#nullable restore
#line 29 "C:\Users\Mehmet Kelleli\Desktop\myblog\myblog\myblog\Views\Post\Index.cshtml"
                         Write(Model.Categories.FirstOrDefault(s=>s.Id==item.CAtegoryId).Name);

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n                        <td>");
#nullable restore
#line 30 "C:\Users\Mehmet Kelleli\Desktop\myblog\myblog\myblog\Views\Post\Index.cshtml"
                              
                                if (item.Aktive == true)
                                {

#line default
#line hidden
#nullable disable
            WriteLiteral("                                    <p class=\"text-success\">Aktive</p>\r\n");
#nullable restore
#line 34 "C:\Users\Mehmet Kelleli\Desktop\myblog\myblog\myblog\Views\Post\Index.cshtml"
                                }
                                if(item.Aktive==false)
                                {

#line default
#line hidden
#nullable disable
            WriteLiteral("                                    <p class=\"text-danger\">Not Aktive</p>\r\n");
#nullable restore
#line 38 "C:\Users\Mehmet Kelleli\Desktop\myblog\myblog\myblog\Views\Post\Index.cshtml"
                                    
                                }                                        
                            

#line default
#line hidden
#nullable disable
            WriteLiteral("                          </td>\r\n                          <td><a");
            BeginWriteAttribute("href", " href=\"", 1707, "\"", 1740, 3);
            WriteAttributeValue("", 1714, "/Post/PostUpdate/", 1714, 17, true);
#nullable restore
#line 42 "C:\Users\Mehmet Kelleli\Desktop\myblog\myblog\myblog\Views\Post\Index.cshtml"
WriteAttributeValue("", 1731, item.Id, 1731, 8, false);

#line default
#line hidden
#nullable disable
            WriteAttributeValue("", 1739, "/", 1739, 1, true);
            EndWriteAttribute();
            WriteLiteral("><Button class=\"btn btn-warning\">Update</Button></a></td>\r\n                          <td><a");
            BeginWriteAttribute("href", " href=\"", 1832, "\"", 1865, 3);
            WriteAttributeValue("", 1839, "/Post/PostDelete/", 1839, 17, true);
#nullable restore
#line 43 "C:\Users\Mehmet Kelleli\Desktop\myblog\myblog\myblog\Views\Post\Index.cshtml"
WriteAttributeValue("", 1856, item.Id, 1856, 8, false);

#line default
#line hidden
#nullable disable
            WriteAttributeValue("", 1864, "/", 1864, 1, true);
            EndWriteAttribute();
            WriteLiteral("><Button class=\"btn btn-danger\">Delete</Button></a></td>\r\n\r\n                      </tr>\r\n");
#nullable restore
#line 46 "C:\Users\Mehmet Kelleli\Desktop\myblog\myblog\myblog\Views\Post\Index.cshtml"
                  }

#line default
#line hidden
#nullable disable
            WriteLiteral(@"                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
              <div class=""card-footer clearfix"">
                <ul class=""pagination pagination-sm m-0 float-right"">
                  <li class=""page-item""><a class=""page-link"" href=""#"">&laquo;</a></li>
                  <li class=""page-item""><a class=""page-link"" href=""#"">1</a></li>
                  <li class=""page-item""><a class=""page-link"" href=""#"">2</a></li>
                  <li class=""page-item""><a class=""page-link"" href=""#"">3</a></li>
                  <li class=""page-item""><a class=""page-link"" href=""#"">&raquo;</a></li>
                </ul>
              </div>
            </div>
            <!-- /.card -->");
        }
        #pragma warning restore 1998
        #nullable restore
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; } = default!;
        #nullable disable
        #nullable restore
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; } = default!;
        #nullable disable
        #nullable restore
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; } = default!;
        #nullable disable
        #nullable restore
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; } = default!;
        #nullable disable
        #nullable restore
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<PostCategoriesViewModel> Html { get; private set; } = default!;
        #nullable disable
    }
}
#pragma warning restore 1591
