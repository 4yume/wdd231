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
import { anime } from "../data/anime.mjs";

const animeContainer = document.querySelector('#anime-container');

//filter button
const filterButtons = document.querySelectorAll('.filter-buttons button');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedGenre = button.textContent;

        if (selectedGenre === "All") {
            displayAnime(anime);
        }
        else {
            const filteredAnime = anime.filter(show =>
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



function displayAnime(animeList) {
    animeContainer.innerHTML = "";

    animeList.forEach(show => {
        const card = document.createElement("section");
        card.classList.add('card');
        
        card.innerHTML = `
        <img src="images/${show.image}" alt="${show.title}">
        <h2>${show.title}</h2>
        <div class="info">
            <p><strong>Genre:</strong> ${show.genre}</p>
            <p><strong>Rating:</strong> ☆${show.rating}</p>
        </div>
        <button class="details-btn">View Detail</button>
        `;

        const detailsButton = card.querySelector('.details-btn');

        detailsButton.addEventListener('click', () => {

            modalTitle.textContent = show.title;
            modalStatus.textContent = `Status: ${show.status}`;
            modalDescription.textContent = show.description;

            modal.showModal();
        });

        closeModal.addEventListener('click', () => {
            modal.close();
        });

        animeContainer.appendChild(card);
    });
}

displayAnime(anime);