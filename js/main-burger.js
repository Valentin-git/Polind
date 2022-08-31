// const menuNav = document.querySelector('.menu-nav');
const menu = document.querySelector('.menu');
const mobilMenu = document.querySelector('.mobil-menu');
// const burgerMenu = document.querySelector('.burger-menu');




mobilMenu.onclick = function() {
  mobilMenu.classList.toggle('open');
  menu.classList.toggle('open');
};

// dococument.addEventListener('click', function(e) {
//     if (!e.target.closest('.mobil-menu')) {
//         mobilMenu.classList.remove('open');
//         menu.classList.remove('open');
//     }
// });