const navBtn = document.querySelector(".hamburger-button");
const mainNav = document.querySelector(".header-nav");
const navOverlay = document.querySelector(".nav-overlay");
navBtn.addEventListener("click", () => {
  navBtn.classList.toggle("active");
  mainNav.classList.toggle("opened");
  navOverlay.classList.toggle("active");
});
