const hamMenu = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".mobile-nav-bar");
const cross = document.querySelector(".nav-cross");
const body = document.querySelector(".body");

hamMenu.addEventListener("click", () => {
  navMenu.classList.add("show");
  cross.classList.add("show");
  hamMenu.classList.add("hide");
  body.classList.add("overflow");
});

cross.addEventListener("click", () => {
  navMenu.classList.remove("show");
  cross.classList.remove("show");
  hamMenu.classList.remove("hide");
  body.classList.remove("overflow");
});
