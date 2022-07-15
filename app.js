const hamburger_menu = document.querySelector(".x-menu");
const container = document.querySelector(".container-az1kk");

hamburger_menu.addEventListener("click", () => {
    container.classList.toggle("active");
});