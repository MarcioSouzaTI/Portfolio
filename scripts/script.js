const menuha = document.querySelector(".menuha");
const navMenu = document.querySelector(".nav-menu");

menuha.addEventListener("click", () => {
    menuha.classList.toggle('active');
    navMenu.classList.toggle('active');
})