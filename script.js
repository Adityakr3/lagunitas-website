// ......................................................................................................
var elem2 = document.querySelector(".elem2");
var elemDog = document.querySelector(".elemDog");
elem2.addEventListener("mousemove", function () {
  elemDog.style.bottom = "-5%";
  setTimeout(() => {
    elemDog.style.bottom = "-108%";
  }, 555);
});
// ......................slider....................................................................
var menu = document.querySelector("#menu");
var slider = document.querySelector(".lft-slider");
var close = document.querySelector("#close");
menu.addEventListener("click", function () {
  slider.style.left = "0";
  menu.style.display = "none";
  close.style.display = "initial";
});
close.addEventListener("click", function () {
  slider.style.left = "-38%";
  menu.style.display = "initial";
  close.style.display = "none";
});
// .......................................overlay ka java script..................................
var overlayDiv = document.querySelector("#overlayDiv");
var close1 = document.querySelector("img");
var overlay = document.querySelector("#overlay");
var btn = document.querySelector(".btn-for-fun");
setTimeout(() => {
  overlay.style.display = "initial";
}, 2);
close1.addEventListener("click", function () {
  overlay.style.display = "none";
});
btn.addEventListener("click", function () {
  // overlay.style.display = "none";
});
//......................................another sucribe box.........................................
setTimeout(() => {
  over.style.right= "2%";
}, 5255);
var over = document.querySelector("#overlayDiv1");
var close2 =document.querySelector(".cross2");//........................................................................................................
close2.addEventListener("click",function(){
    over.style.right= "-4%";
})