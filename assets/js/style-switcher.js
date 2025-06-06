// Style Switcher Toggle
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
styleSwitcherToggler.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

// Hide switcher on scroll
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
});

// Theme Colors
function setActiveStyle(color) {
    const alternateStyles = document.querySelectorAll(".alternaive-style");
    alternateStyles.forEach(style => {
        if(color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
    localStorage.setItem("color-theme", color);
}

// Check saved theme
const savedColor = localStorage.getItem("color-theme");
if(savedColor) {
    setActiveStyle(savedColor);
}

// Dark Mode Toggle
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
    updateIcon();
});

function updateIcon() {
    if(document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.remove("fa-moon");
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        dayNight.querySelector("i").classList.remove("fa-sun");
        dayNight.querySelector("i").classList.add("fa-moon");
    }
}

// Vérifier le thème au chargement
if(localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    updateIcon();
}