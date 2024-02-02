const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

const exp = document.querySelector("#exp");
const grid4 = document.querySelector("#grid4");
const grid5 = document.querySelector("#grid5");
const grid6 = document.querySelector("#grid6");
grid4.classList.add("hidden");
grid5.classList.add("hidden");
grid6.classList.add("hidden");

exp.addEventListener("click", function () {
  grid4.classList.toggle("hidden");
  grid5.classList.toggle("hidden");
  grid6.classList.toggle("hidden");
});

let sliderContainer = document.getElementById("sliderContainer");
let slider = document.getElementById("slider");
let cards = slider.getElementsByTagName("li");

let elementsToShow = 3;
if (document.body.clientWidth < 1000) {
  elementsToShow = 1;
} else if (document.body.clientWidth < 1500) {
  elementsToShow = 2;
}

let sliderContainerWidth = sliderContainer.clientWidth;

let cardWidth = sliderContainerWidth / elementsToShow;

slider.style.width = cards.length * cardWidth + "px";
slider.style.transition = "margin";
slider.style.transitionDuration = "1s";

for (let index = 0; index < cards.length; index++) {
  const element = cards[index];
  element.style.width = cardWidth + "px";
}

function next() {
  if (+slider.style.marginLeft.slice(0, -2) != -cardWidth * (cards.length - elementsToShow))
    slider.style.marginLeft = +slider.style.marginLeft.slice(0, -2) - cardWidth + "px";
}

function prev() {
  if (+slider.style.marginLeft.slice(0, -2) != 0) slider.style.marginLeft = +slider.style.marginLeft.slice(0, -2) + cardWidth + "px";
}

// function autoPlay() {
//   prev();

//   if (+slider.style.marginLeft.slice(0, -2) === -cardWidth * (cards.length - elementsToShow)) {
//     slider.style.marginLeft = "0px";
//   }

//   setTimeout(() => {
//     autoPlay();
//   }, 3000);
// }

setTimeout(() => {
  autoPlay();
}, 3000);

let text = new SplitType("#text");

let character = document.querySelectorAll(".char");

for (let i = 0; i < character.length; i++) {
  character[i].classList.add("translate-y-full");
}

gsap.to(".char", {
  y: 0,
  stagger: 0.05,
  delay: 0.02,
  duration: 0.5,
});

gsap.registerPlugin(ScrollTrigger);

gsap.to(".divHome", {
  scrollTrigger: ".divHome",
  id:"example",
  x: 500,
});
console.log(ScrollTrigger.getById("example").animation);
