"use strict";

// Hamburger menu
function hamburgerMenu() {
    let toggleBtn = document.querySelector(".toggle-button");
    let navLinks = document.querySelector(".nav-links");
    let logoContainer = document.querySelector(".logo-container");

    // Event listener
    toggleBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        logoContainer.classList.toggle("active");
    });
}

// Header template
let header = document.querySelector(".header");

// Create function to generate header and invoke header, footer and hamburger menu
function generateHeaderFooter() {
    header.innerHTML = `
    <div class="container">
    <div class="logo-container">
        <img id="logo" src="./images//logo.png">
    </div>
    <a href="#" class="toggle-button">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    </a>
    <ul class="nav-links">
        <li><a href="index.html">Start</a></li>
        <li><a href="jasmin_recipe.html">Rezept des Tages</a></li>
        <li><a href="#">Kontakt</a></li>
        <li><a href="#">Impressum</a></li>
    </ul>
</div>
    `;

    // Invoke hamburger menu function
    hamburgerMenu();
    generateFooter();
};


// Footer template
let footer = document.querySelector(".footer");

// Create function to generate footer 
function generateFooter() {
    footer.innerHTML = `
<div class="container">
<div class="footer-left">
    <img src="./images/logo.png">
    <ul class="social-links">
        <li><a href="https://twitter.com/?lang=de"><i class="fa-brands fa-twitter"></i></a></li>
        <li><a href="https://de-de.facebook.com/"><i class="fa-brands fa-facebook"></i></a></li>
        <li><a href="https://www.instagram.com/"><i class="fa-brands fa-square-instagram"></i></a></li>
    </ul>
</div>
<div class="footer-right">
    <ul class="right-links">
        <li><a href="#">Datenschutz</a></li>
        <li><a href="#">Kontakt</a></li>
        <li><a href="#">Impressum</a></li>
    </ul>
</div>
</div>
`;
};