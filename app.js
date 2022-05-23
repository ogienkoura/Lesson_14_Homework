// let anchors = document.querySelectorAll('.menu a[href*="#"]');

// for (anchor of anchors) {
//   if (anchor) {
//     anchor.addEventListener('click', function(e){
//       e.preventDefault();
//       anchorId = this.getAttribute('href');
//       document.querySelector(anchorId).scrollIntoView({
//         behavior: 'smooth', block: 'start'
//       })
//     })
//   }
// }


const viewModal = document.querySelector(".contact-modal");
const closeModalBtn = document.querySelector(".button--reset");
console.log (closeModalBtn);

function openModal () {
  viewModal.classList.add("show");
  viewModal.classList.remove("hide");
}

function closeModal () {
  viewModal.classList.remove("show");
  viewModal.classList.add("hide");
}

closeModalBtn.addEventListener("click", closeModal);


function showModalByScroll () {
  if (window.pageYOffset > document.body.scrollHeight/2) {
    openModal();
    window.removeEventListener("scroll", showModalByScroll);
  }
}

window.addEventListener("scroll", showModalByScroll);



//  BURGER MENU


const mobileMenu = document.querySelector(".nav-mobile-menu");
const mainMenu = document.querySelector(".menu");

mobileMenu.addEventListener("click", function () {
  mobileMenu.classList.toggle("active-menu");
  if (mobileMenu.classList.contains("active-menu")) {
    mainMenu.classList.add("active-menu");
  } else {
    mainMenu.classList.remove("active-menu");
  }
});




