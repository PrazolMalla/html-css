const hamMenu = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".mobile-nav-bar");
const cross = document.querySelector(".nav-cross");

hamMenu.addEventListener("click", () => {
  navMenu.classList.add("show");
  cross.classList.add("show");
  hamMenu.classList.add("hide");
});

cross.addEventListener("click", () => {
  navMenu.classList.remove("show");
  cross.classList.remove("show");
  hamMenu.classList.remove("hide");
});
