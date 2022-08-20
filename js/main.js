var burger=document.querySelector(".nav-btn");
burger.addEventListener("click",
function(){
 var c1=document.querySelector(".c1");
 c1.classList.toggle("c12");
 var c2=document.querySelector(".c2");
 c2.classList.toggle("c22");
});