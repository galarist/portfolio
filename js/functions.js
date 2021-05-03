// Responsive menu
const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");
menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});
menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});
$('.overlay').on('click', function(e) {
  $('.overlay__content a').each(function(index) {
    overlay.classList.remove("overlay--active");
  });
});
