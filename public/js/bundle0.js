(()=>{"use strict";window.addEventListener("DOMContentLoaded",(()=>{(function(){const e=document.querySelector(".sm-header"),t=(document.querySelector(".international"),document.querySelector(".call-us"));function n(n=window.innerWidth){const o=()=>n<=481?"50px":"80px";window.scrollY>1100?(e.style.position="fixed",e.style.maxHeight=`${o()}`,e.style.transition="all 0.3s",t.classList.add("active")):window.scrollY<=100?(e.style.position="absolute",e.style.maxHeight=`${o()}`,e.style.transition="all 0s"):(e.style.maxHeight="0",e.style.transition="all 0.3s",t.classList.remove("active"))}function o(){window.innerWidth<=990&&window.addEventListener("scroll",n,{passive:!0})}o(),window.addEventListener("resize",(()=>{window.innerWidth<=990?o():(e.style.position="",window.removeEventListener("scroll",n))}))})(),function(){const e=document.querySelector(".btn-up");window.addEventListener("scroll",(()=>{window.scrollY>400?e.style.bottom="0":e.style.bottom="-55px"}),{passive:!0}),e.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})}))}(),function(){const e=document.querySelector(".sidebar"),t=document.querySelector(".burger"),n=document.querySelector(".close-menu");e.querySelectorAll("a").forEach((t=>{t.addEventListener("click",(()=>{e.classList.remove("active")}))})),t.addEventListener("click",(function(){e.classList.add("active")})),n.addEventListener("click",(function(){e.classList.remove("active")}))}()}))})();
//# sourceMappingURL=bundle.js.map