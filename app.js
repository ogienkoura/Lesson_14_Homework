// function scrollTo(element) {
//     window.scroll({
//         left:0,
//         top: element.offsetTop,
//         behavior:'smooth'
//     })
// }

// let teamButton = document.querySelector ('#team-btn');
// let teamSection = document.querySelector ('.meet_the_team');

// teamButton.addEventListener('click', function(){
//     scrollTo(teamSection)
// })

let anchors = document.querySelectorAll('.menu a[href*="#"]');

for (anchor of anchors) {
  if (anchor) {
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      anchorId = this.getAttribute('href');
      document.querySelector(anchorId).scrollIntoView({
        behavior: 'smooth', block: 'start'
      })
    })
  }
}