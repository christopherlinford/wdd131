document.addEventListener("DOMContentLoaded", () => {
    // Hamburger Menu Toggle
    const menuButton = document.querySelector("#menu");
    const navigation = document.querySelector(".navigation");
    const nameHeader = document.querySelector(".nameHeader");

    if (menuButton && navigation) {
        menuButton.addEventListener("click", () => {
            navigation.classList.toggle("open");
            menuButton.classList.toggle("open");
            if (nameHeader) {
                nameHeader.classList.toggle("hidden");
            }
        });
    }

    // Hamburger Menu Icon
    const navMenu = document.querySelector("nav ul");
    if (navMenu) {
        const hamburger = document.createElement("button");
        hamburger.innerHTML = "☰";
        hamburger.classList.add("hamburger");
        document.querySelector("header").prepend(hamburger);

        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("visible");
            hamburger.innerHTML = navMenu.classList.contains("visible") ? "✖" : "☰";
        });
    }
});   
   
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});
   
   
   
   
   
   
   
   const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    

    // Toggle menu visibility
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("hidden");
    });

// Header hambuger button secction
document.addEventListener('DOMContentLoaded', () => {
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');
    const nameHeader = document.querySelector('.nameHeader');

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
        nameHeader.classList.toggle('hidden');
    });
});


const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');


// Hamburger menu functionality
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("nav ul");
    const hamburger = document.createElement("button");
    hamburger.innerHTML = "☰";
    hamburger.classList.add("hamburger");

    document.querySelector("header").prepend(hamburger);

    hamburger.addEventListener("click", () => {
        nav.classList.toggle("visible");
        hamburger.innerHTML = nav.classList.contains("visible") ? "✖" : "☰";
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');
    const nameHeader = document.querySelector('.nameHeader'); // Select the h1 element

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
        nameHeader.classList.toggle('hidden'); // Toggle the 'hidden' class
    });
});



