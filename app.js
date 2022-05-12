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


const viewSection = document.querySelector(".contact-modal");


window.addEventListener('scroll', function() {
  viewSection.hidden = (scrollY < this.document.documentElement.scrollHeight / 2);
})









