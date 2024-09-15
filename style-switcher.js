// Toggle Style Switcher Visibility
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

// Hide Style Switcher on Scroll
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
});

// Set Active Style
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}

// Toggle Day/Night Mode
const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
    const icon = dayNight.querySelector("i");
    document.body.classList.toggle("dark");

    // Toggle icon based on the dark mode status
    if (document.body.classList.contains("dark")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        localStorage.setItem('theme', 'dark'); // Save the theme preference
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        localStorage.setItem('theme', 'light'); // Save the theme preference
    }
});

// Set Initial Day/Night Icon Based on LocalStorage
window.addEventListener("load", () => {
    const icon = dayNight.querySelector("i");
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.body.classList.add("dark");
        icon.classList.add("fa-sun");
    } else {
        document.body.classList.remove("dark");
        icon.classList.add("fa-moon");
    }
});
