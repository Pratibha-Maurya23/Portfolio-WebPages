// =============== toggle style switcher ===============
const styleSwitcherToggle = document.querySelector(".style-switcher-toggle");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

// hide style switcher on scroll
window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});

// =============== change skin color ===============
const alternativeStyles = document.querySelectorAll(".alternative-style");  

function setActiveStyle(color) {
 alternativeStyles.forEach((style) => {
  if(color === style.getAttribute("title")){
    style.removeAttribute("disabled");
  }else{
    style.setAttribute("disabled","true");
  }
 });
}

// =============== toggle day/night mode ===============
const dayNightToggle = document.querySelector(".day-night"); 
dayNightToggle.addEventListener("click",()=>{
  dayNightToggle.querySelector("i").classList.toggle("fa-sun");
  dayNightToggle.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
})

window.addEventListener("load",()=>{
  if(document.body.classList.contains("dark")){
    dayNightToggle.querySelector("i").classList.add("fa-sun");
  }
  else{
    dayNightToggle.querySelector("i").classList.add("fa-moon");
  }
})