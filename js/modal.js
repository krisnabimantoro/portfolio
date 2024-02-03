const modal = document.querySelector(".modal");
const showModal = document.querySelector(".show-modal");
const closeModal = document.querySelector(".close-modal")
const inModal = document.querySelector(".in-modal");

modal.classList.add("hidden")
showModal.addEventListener("click",function(){
    modal.classList.remove("hidden")
    inModal.setAttribute("data-aos", "zoom-in");


    if (!AOS.initiated) {
      AOS.init();
    }
})

closeModal.addEventListener("click",function(){
    modal.classList.add("hidden")
})

