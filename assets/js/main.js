/*Menu*/

const menuBtn = document.querySelector('.boton__nav');
const menuList = document.querySelector('.navigation__nav');
/* Menu toggle */

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("open");
    menuList.classList.toggle("open");
});