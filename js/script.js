// const Aos = require("aos");

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

const exp = document.querySelector("#exp");
const grid7 = document.querySelector("#grid7");
const grid8 = document.querySelector("#grid8");
const grid9 = document.querySelector("#grid9");
const grid10 = document.querySelector("#grid10");
const grid11 = document.querySelector("#grid11");
const grid12 = document.querySelector("#grid12");

grid7.classList.add("hidden");
grid8.classList.add("hidden");
grid9.classList.add("hidden");
grid10.classList.add("hidden");
grid11.classList.add("hidden");
grid12.classList.add("hidden");

exp.addEventListener("click", function () {

  grid8.classList.toggle("hidden");
  grid7.classList.toggle("hidden");
  grid9.classList.toggle("hidden");
  grid10.classList.toggle("hidden");
  grid11.classList.toggle("hidden");
  grid12.classList.toggle("hidden");

  grid7.setAttribute("data-aos", "zoom-in");
  grid8.setAttribute("data-aos", "zoom-in");
  grid9.setAttribute("data-aos", "zoom-in");

  grid10.setAttribute("data-aos", "zoom-in");
  grid11.setAttribute("data-aos", "zoom-in");
  grid12.setAttribute("data-aos", "zoom-in");

  
  if (!AOS.initiated) {
    AOS.init();
  }
});
