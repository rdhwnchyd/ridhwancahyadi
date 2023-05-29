const nav = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  //   console.log(nav);
  if (window.scrollY > 1) {
    nav.classList.replace("bg-transparent", "nav-color");
  } else if (window.scrollY <= 0) {
    nav.classList.replace("nav-color", "bg-transparent");
  }
});

// Project

// gambar
const gambarProject = document.querySelector(".image-p1");
gambarProject.addEventListener("mouseover", function () {
  gambarProject.src = "assets/img/drstudents-hover.png";
});
gambarProject.addEventListener("mouseout", function () {
  gambarProject.src = "assets/img/drstudents.jpg";
});
