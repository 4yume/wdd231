const navbutton = document.querySelector('#ham-btn');
const navbar = document.querySelector('#nav-bar');

navbutton.addEventListener('click', () => {
    navbar.classList.toggle('show');

    if (navbar.classList.contains("show")) {
        navbutton.textContent = "X";
    }
    else {
        navbutton.textContent = "≣";
    }
});


/* date */
const today = new Date();
const year = today.getFullYear();

document.getElementById('currentyear').innerHTML = year;
document.getElementById('lastModified').innerHTML = `Last Modification: ${document.lastModified}`;


//import from mjs file
import { places } from "../data/places.mjs";

//card
const discoverCard = document.querySelector('.discover-card');

places.forEach(place => {
    const card = document.createElement("article");
    card.classList.add("card");

    card.innerHTML = `
    <h2>${place.name}</h2>
    <figure>
        <img src="images/${place.photo_url}" alt="${place.name}" loading="lazy" width="300" height="200">
    </figure>
    <address>${place.address}</address>
    <p>${place.description}</p>
    <button>Learn More</button>
    `;

    discoverCard.appendChild(card);
});

//visit message
const visitMessage = document.querySelector('#visit-message');

const msToDays = 86400000;
const lastVisit = Number(localStorage.getItem("lastVisit"));
const currentVisit = Date.now();

if (!lastVisit) {
    visitMessage.textContent ="Welcome! Let us know if you have any question."
} else {
    const daysBetween = Math.floor(
        (currentVisit - lastVisit) / msToDays
    );

    if (daysBetween < 1) {
        visitMessage.textContent = "Back so soon! Awesome!";
    }
    else {
        visitMessage.textContent = `You last visited ${daysBetween} ${daysBetween === 1 ? "day" : "days"} ago.`;
    }
}   
localStorage.setItem("lastVisit", currentVisit);