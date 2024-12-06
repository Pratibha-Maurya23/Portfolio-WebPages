// Header Toggle

let menuBtn = document.getElementById('MenuBtn')

menuBtn.addEventListener('click', function() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
    
})



// Typing Effect

let typed = new Typed('.auto-input',{
    strings: ['Front-End Developer!','Freelancer!','Coder!'],
    typedSpeed: 1000,
    backSpeed: 100,
    backDelay: 200,
    loop: true,
}); 