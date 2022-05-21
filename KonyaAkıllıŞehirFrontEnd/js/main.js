console.log("eğer biri okuyorsa tüm kodlar  el emeğidir :)")
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {

         document.getElementById("scroll").style.height = "auto";
         document.getElementById("scroll").style.position = "fixed";
         document.getElementById("scroll").style.top = "0";
         document.getElementById("scroll").style.background = "white";
         document.getElementById("logo").src = "https://akillisehir.konya.bel.tr/assets/site/img/logo-black.png";
         document.getElementById("scroll").style.padding = "1% 2%";
         document.getElementById("a1").style.color = "black";
         document.getElementById("a9").style.color = "black";
         document.getElementById("a3").style.color = "black";
         document.getElementById("a4").style.color = "black";
         document.getElementById("a5").style.color = "black";
         document.getElementById("scroll").style.transition = "500ms all";


  } else {
			document.getElementById("scroll").style.transition = "500ms all";
         document.getElementById("scroll").style.height = "auto";
         document.getElementById("scroll").style.position = "absolute";
         document.getElementById("scroll").style.top = "0";
         document.getElementById("scroll").style.background = "";
         document.getElementById("scroll").style.padding = "0% 1%";
         document.getElementById("a1").style.color = "white";
         document.getElementById("logo").src = "https://akillisehir.konya.bel.tr/assets/site/img/logo-poppins.png";
         document.getElementById("a9").style.color = "white";
         document.getElementById("a3").style.color = "white";
         document.getElementById("a4").style.color = "white";
         document.getElementById("a5").style.color = "black";
  }
} 

