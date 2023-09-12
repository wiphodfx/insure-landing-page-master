var navlink = document.getElementById("navLinks");
var closeicon = document.getElementById("closeMenu");
var openicon = document.getElementById("openMenu");

function menuOpen() {
  navlink.style.display = "block";
  closeicon.style.display = "block";
  openicon.style.display = "none";
}

function menuClose() {
  navlink.style.display = "none";
  closeicon.style.display = "none";
  openicon.style.display = "block";
}
