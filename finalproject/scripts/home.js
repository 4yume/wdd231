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


//anime card
import { getAnime } from "./api.js";
//spotlight
const spotlight = document.querySelector('#spotlight-container');

async function loadSpotlights() {
    const animeList = await getAnime();

    if (animeList) {
        displaySpotlights(animeList);
    }
}

function displaySpotlights(animeList) {
    const selectedAnime = [];

    while (selectedAnime.length < 3) {
        const randomIndex = Math.floor(Math.random() * animeList.length);
        const randomAnime = animeList[randomIndex];

        if (!selectedAnime.includes(randomAnime)) {
            selectedAnime.push(randomAnime);
        }
    }

    selectedAnime.forEach(show => {
        const card = document.createElement('section');
        card.classList.add('card');

        card.innerHTML = `
        <img loading="lazy" src="images/${show.image}" alt="${show.title}">
        <h2>${show.title}</h2>
        <div class="info">
            <p><strong>Genre:</strong> ${show.genre}</p>
            <p><strong>Rating:</strong> ☆${show.rating}</p>
        </div>
        `;

        spotlight.appendChild(card);
    });
}

loadSpotlights();