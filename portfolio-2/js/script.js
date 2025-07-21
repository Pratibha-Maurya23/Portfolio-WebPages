// /=============================== typing animation ============================
var typed = new Typed(".typing", {
  strings: ["Web Designer", "Web Developer", "Problem Solver", "Freelancer"],
  typeSpeed: 100,
  Backspeed: 60,
  loop: true,
});

// =============== aside toggle ===============
const nav = document.querySelector(".nav"),
  navlist = nav.querySelectorAll("li"),
  totalNavList = navlist.length;
(allSections = document.querySelectorAll(".section")),
  (totalSection = allSections.length);
for (let i = 0; i < totalNavList; i++) {
  const a = navlist[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navlist[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
      }
      navlist[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}
function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSections[i].classList.remove("back-section");
  }
}
function addBackSection(num) {
  allSections[num].classList.add("back-section");
}
// =============== show section on click ===============
// This function is a placeholder for the actual implementation
function showSection(element) {
  // Remove 'active' class from all sections
  for (let i = 0; i < totalSection; i++) {
    allSections[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
  for (let j = 0; j < totalNavList; j++) {
    navlist[j].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      navlist[j].querySelector("a").getAttribute("href").split("#")[1] ===
      target
    ) {
      navlist[j].querySelector("a").classList.add("active");
    }
  }
}

document.querySelector(".hire-me").addEventListener("click", function () {
   const target = this.getAttribute("href").split("#")[1];
  // Remove 'active' class from all sections
  showSection(this);
  updateNav(this);
  removeBackSection();
  for (let i = 0; i < totalSection; i++) {
    if (allSections[i].id === target) {
      addBackSection(i);
      break;
    }
  }
});
const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});
function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSections[i].classList.toggle("open");
  }
}
