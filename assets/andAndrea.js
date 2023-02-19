var activityEvents=["mousedown","mousemove","keydown","scroll","touchstart","click","keypress","touchmove"];
    activityEvents.forEach(function(e){window.addEventListener(e,functionCustomJS,!1)});
let flag = false;
function functionCustomJS(){
if (flag == false) {
    flag = true;
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PPXZD7D');

(function(h,o,t,j,a,r){
h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
h._hjSettings={hjid:1420129,hjsv:6};
a=o.getElementsByTagName('head')[0];
r=o.createElement('script');r.async=1;
r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');

var script_loaded=!1;function loadJSscripts(){setTimeout(function(){if(!script_loaded){script_loaded=!0;var t=document.getElementsByTagName("script");for(i=0;i<t.length;i++)null!==t[i].getAttribute("data-src")&&(t[i].setAttribute("src",t[i].getAttribute("data-src")),delete t[i].dataset.src);var e=document.getElementsByTagName("link");for(i=0;i<e.length;i++)null!==e[i].getAttribute("data-href")&&(e[i].setAttribute("href",e[i].getAttribute("data-href")),delete e[i].dataset.href);setTimeout(function(){document.dispatchEvent(new CustomEvent("StartAsyncLoading")),document.dispatchEvent(new CustomEvent("StartKernelLoading"))},400)}},9e3)}function loadJSscriptsNow(){if(!script_loaded){script_loaded=!0;var t=document.getElementsByTagName("script");for(i=0;i<t.length;i++)null!==t[i].getAttribute("data-src")&&(t[i].setAttribute("src",t[i].getAttribute("data-src")),delete t[i].dataset.src);var e=document.getElementsByTagName("link");for(i=0;i<e.length;i++)null!==e[i].getAttribute("data-href")&&(e[i].setAttribute("href",e[i].getAttribute("data-href")),delete e[i].dataset.href);setTimeout(function(){document.dispatchEvent(new CustomEvent("StartAsyncLoading")),document.dispatchEvent(new CustomEvent("StartKernelLoading"))},400)}}var activityEvents=["mousedown","mousemove","keydown","scroll","touchstart","click","keypress","touchmove"];activityEvents.forEach(function(t){window.addEventListener(t,loadJSscriptsNow,!1)}),document.addEventListener("load",loadJSscripts,!1),document.addEventListener("onload",loadJSscripts,!1),null!=window.addEventListener?window.addEventListener("load",loadJSscripts,!1):null!=window.attachEvent?window.attachEvent("onload",loadJSscripts):window.onload=loadJSscripts;}}