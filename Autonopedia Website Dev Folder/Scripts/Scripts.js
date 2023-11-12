console.log("Script loaded!");

document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const navLinks = document.getElementById("nav-links");

    hamburgerMenu.addEventListener("click", function () {
        this.classList.toggle("active");
        navLinks.classList.toggle("active");
        alert("Clicked!");
    });
});
