const navBtn = document.querySelector(".hamburger-button");
const mainNav = document.querySelector(".header-nav");
navBtn.addEventListener("click", () => {
  navBtn.classList.toggle("active");mainNav.classList.toggle("opened");
});
