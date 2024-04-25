// typing animation
var typed = new Typed(".typing", {
  strings: [
    "",
    "Web Developer",
    "App developer",
    "Graphic designer",
    "Web Designer",
  ],
  typeSpeed: 100,
  BackSpeed: 50,
  loop: true,
});

const nav = document.querySelector(".nav"),
  navlist = nav.querySelectorAll("li"),
  totalNavList = navlist.length;

const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});
function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll(".nav li a");
  links.forEach(function (link) {
    link.addEventListener("click", function () {
      links.forEach(function (l) {
        l.classList.remove("active");
      });
      this.classList.add("active");
    });
  });
});
