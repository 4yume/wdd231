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



//import anime data
import { getAnime } from "./api.js";


let selectedAnime = null;

const animeContainer = document.querySelector('#anime-container');

let animeList = [];

async function loadAnime() {
    animeList = await getAnime();

    if (animeList) {
        displayAnime(animeList);
    }
}

//filter button
const filterButtons = document.querySelectorAll('.filter-buttons button');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedGenre = button.textContent;

        if (selectedGenre === "All") {
            displayAnime(animeList);
        }
        else {
            const filteredAnime = animeList.filter(show =>
                show.genre.includes(selectedGenre)
            );
            displayAnime(filteredAnime);
        }
    });
});

//modal dialog
const modal = document.querySelector('#anime-modal');
const closeModal = document.querySelector('#close-modal');

const modalTitle = document.querySelector('#modal-title');
const modalStatus = document.querySelector('#modal-status');
const modalDescription = document.querySelector('#modal-description');

const favoriteButton = document.querySelector('#favorite-btn');


function displayAnime(animeList) {
    animeContainer.innerHTML = "";

    animeList.forEach(show => {
        const card = document.createElement("section");
        card.classList.add('card');
        
        card.innerHTML = `
        <img loading="lazy" src="images/${show.image}" alt="${show.title}">
        <h2>${show.title}</h2>
        <div class="info">
            <p><strong>Genre:</strong> ${show.genre}</p>
            <p><strong>Rating:</strong> ☆${show.rating}</p>
        </div>
        <button class="details-btn">View Detail</button>
        `;

        const detailsButton = card.querySelector('.details-btn');

        detailsButton.addEventListener('click', () => {

            selectedAnime = show;

            modalTitle.textContent = show.title;
            modalStatus.textContent = `Status: ${show.status}`;
            modalDescription.textContent = show.description;

            modal.showModal();
        });
    
        animeContainer.appendChild(card);
});

  
}
closeModal.addEventListener('click', () => {
    modal.close();
});
    
//add favorite
favoriteButton.addEventListener('click', () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const alreadyFavorite = favorites.some(item => item.title === selectedAnime.title);

    if (alreadyFavorite) {
        alert(`${selectedAnime.title} is already in your favorites.`);
    }
    else {
        favorites.push(selectedAnime);

        localStorage.setItem("favorites", JSON.stringify(favorites));

        alert(`${selectedAnime.title} added to favorites!`);
    }
});


loadAnime();