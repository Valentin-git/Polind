const menu = document.querySelector('.menu-nav');
const menuBurger = document.querySelector('.menu');
const menuBtn = document.querySelector('.mobil-menu');

menuBtn.onclick = function() {
    menuBurger.classList.toggle('open');
};

dococument.addEventListener('click', function(e) {
    if (!e.target.closest('.menu')) {
        menuBurger.classList.remove('open');
    }
});