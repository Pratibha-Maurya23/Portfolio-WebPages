//Cursur animation

const cursor = document.querySelector(".cursor");
let timeout;

// Ensure the cursor starts hidden
cursor.style.display = 'none'; 

//cursor movement
document.addEventListener("mousemove",(e) => {
    var x= e.clientX;
    var y = e.clientY;
    cursor.style.top = y + 'px';
    cursor.style.left = x +'px';
    cursor.style.display = 'block';
// stop animation
function mouseStooped(){
    cursor.style.display = 'none';
}
clearTimeout(timeout);
timeout = setTimeout(mouseStooped,2000)
});

//stop animation off the screen
document.addEventListener("mouseout",() =>{
   cursor.style.display = 'none';
});

// ---------------------------------------------------

// Header Toggle
let menuBtn = document.getElementById('MenuBtn');

menuBtn.addEventListener('click', function () {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark');
});


// Typing Effect
console.log("hello");

let typed = new Typed('.auto-input',{
    strings: ['Front-End Developer!','Freelancer!','Coder!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 200,
    loop: true,
}); 

// Active Link State On scroll

// Get All Links
let navLinks = document.querySelectorAll('nav ul li a ')
console.log(navLinks);


// Get all Sections
let sections = document.querySelectorAll('section')

// window.addEventListener('scroll', function () {
//     const scrollPos = window.screenY
//     sections.forEach(section => {
//         if(scrollPos > section.offsetTop && section < (section.offsetTop + section.offsetHeight)){
//             navLinks.forEach(link => {
//                 link.classList.remove('active');
//                 if(section.getAttribute('id') === link.getAttribute('href').substring(1)){
//                     link.classList.add('active');
//                 }
//             });
//         }
//     });

// });
window.addEventListener('scroll', function () {
    const scrollPos = window.scrollY; // Corrected to use scrollY

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        // Check if the current scroll position is within the section's boundaries
        if (scrollPos >= sectionTop - 50 && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active'); // Remove 'active' from all links
                if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('active'); // Add 'active' to the matching link
                }
            });
        }
    });
});


