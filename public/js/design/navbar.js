// When the user scrolls the page, execute myFunction
window.onscroll = function() {navBar();};

// Get the header
var header = document.getElementById("navBar");
// var cue = document.getElementById("cue-image-2");
// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function navBar() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    // cue.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
    // cue.classList.remove("sticky");
  }
}