// Dark - Light mode
let darkModeEnabled = localStorage.getItem("darkModeEnabled") === "true";

const enableDarkMode = () => {
    darkModeEnabled = true;
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkModeEnabled", "true");
};

const disableDarkMode = () => {
    darkModeEnabled = false;
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkModeEnabled", "false");
};

document.addEventListener("DOMContentLoaded", () => {
    darkModeButton.checked = darkModeEnabled;
    document.body.classList.toggle("dark-mode", darkModeEnabled);
});

const darkModeButton = document.getElementById("darkModeButton");
darkModeButton.addEventListener("change", () => {
    if (darkModeButton.checked) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

// Menu
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navList.classList.toggle("active");
});

// Multiple text
const typed = new Typed(".multiple", {
    strings: ["Front-End Developer", "Web Designer", "Programmer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});

// Header shadow on scroll effect

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        console.log("ist");

        header.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
    } else {
        console.log("not");

        header.style.boxShadow = "none";
    }
});

// Scroll section active link
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => {
                link.classList.remove("active");
            });
            document
                .querySelector("header nav ul li a[href='#" + id + "']")
                .classList.add("active");
        }
    });
};

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navList.classList.remove("active");
    });
});
