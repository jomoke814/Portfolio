const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const showBtn = document.querySelector('.show-more');
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
