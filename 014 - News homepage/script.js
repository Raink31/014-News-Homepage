function toggleMenu () {
    const navbar = document.querySelector(".nav-bar");
    const burger = document.querySelector(".nav-open-btn");
    const cross = document.querySelector(".nav-close-btn")
    burger.addEventListener("click", () => {
        navbar.classList.toggle("show-nav");
        cross.classList.toggle("showcross");
    })
    cross.addEventListener("click", () => {
        navbar.classList.toggle("show-nav");
        cross.classList.toggle("showcross");
    })
}

toggleMenu();
