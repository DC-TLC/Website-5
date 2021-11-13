/* Get elements */
const NAV_LINKS = document.querySelector(".nav__links");
const NAV_CLOSE = document.querySelector(".nav__close");
const NAV_MENU = document.querySelector(".nav__menu");
const IMG_SLIDER = document.querySelector(".img-slider");

/* Navigation Code */
function toggleNav() {
    NAV_LINKS.classList.toggle("show");
}

/* Slider Code */
const slider = tns({
    container: ".img-slider",
    controlsContainer: ".custom-controls",
    nav: false,
    speed: 500,
    responsive: {
        1000: {
            items: 3
        }
    }
});

/* Add events to elements */
NAV_CLOSE.addEventListener("click", toggleNav);
NAV_MENU.addEventListener("click", toggleNav);
