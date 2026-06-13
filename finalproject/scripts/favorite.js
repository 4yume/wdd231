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


//favorite
const favoriteContainer = document.querySelector('#favorite-container');

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

function displayFavorites() {
    favoriteContainer.innerHTML = "";

    favorites.forEach(show => {
        const card = document.createElement("section");

        card.classList.add("card");

        card.innerHTML = `
        <img loading="lazy" src="images/${show.image}" alt="${show.title}">
        <h2>${show.title}</h2>

        <div class="info">
            <p><strong>Genre:</strong> ${show.genre}</p>
            <p><strong>Rating:</strong> ☆${show.rating}</p>
        </div>

        <button class="remove-btn">Remove</button>
        `;

        const removeButton = card.querySelector(".remove-btn");

        removeButton.addEventListener('click', () => {
            removeFavorite(show.title);
        });

        favoriteContainer.appendChild(card);
    });
}

function removeFavorite(title) {
    favorites = favorites.filter(show => show.title !== title);

    localStorage.setItem("favorites", JSON.stringify(favorites));

    displayFavorites();
}

displayFavorites();