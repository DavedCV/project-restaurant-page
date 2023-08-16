// navbar toggle

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = [...document.querySelectorAll("[data-nav-link]")];
const menuToggleButton = document.querySelector("[data-menu-toggle-btn]");

menuToggleButton.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

navbar.addEventListener("click", function (e) {
  console.log(this);
  if (navbarLinks.includes(e.target)) {
    navbar.classList.toggle("active");
    menuToggleButton.classList.toggle("active");
  }
});

// header sticky

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function() {
  if (window.scrollY >= 100) header.classList.add("active");
  else header.classList.remove("active");
});