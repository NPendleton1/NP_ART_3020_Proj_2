document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.getElementById("offcanvas-menu");

    menuToggle.addEventListener("click", function () {
        // Toggle menu visibility
        menu.classList.toggle("expanded");

        // Update aria-expanded for accessibility
        const expanded = menu.classList.contains("expanded");
        menuToggle.setAttribute("aria-expanded", expanded);
    });
});