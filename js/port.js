const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const showBtn = document.querySelector('.show-more');
const hiddenElements = document.querySelectorAll('.hidden');
let currentItem = 3;

//scroll effect to navbar
window.addEventListener("scroll", function(){
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("sticky", window.scrollY > 0);
})

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
}))

//Load more button dynamic style
showBtn.addEventListener('click', () => {
    let cards = [...document.querySelectorAll('.projects .projects-container .projects-card')];
    for(var i = currentItem; i < currentItem +3; i++){
        cards[i].style.display = 'inline-block';
    }
    currentItem += 3;
    if(currentItem >= cards.length){
        showBtn.style.display = 'none';
    }
})

//scroll animation effect
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})

hiddenElements.forEach((el) => observer.observe(el));
