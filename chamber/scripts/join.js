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


/* Modal */
const npModal = document.querySelector('#npModal');
const openNpModal = document.querySelector('#openNpModal');

const bronzeModal = document.querySelector('#bronzeModal');
const openBronzeModal = document.querySelector('#openBronzeModal');

const silverModal = document.querySelector('#silverModal');
const openSilverModal = document.querySelector('#openSilverModal');

const goldModal = document.querySelector('#goldModal');
const openGoldModal = document.querySelector('#openGoldModal');

const closeModal = document.querySelectorAll('.closeModal');


openNpModal.addEventListener('click', () => {
    npModal.showModal();
});

openBronzeModal.addEventListener('click', () => {
    bronzeModal.showModal();
});

openSilverModal.addEventListener('click', () => {
    silverModal.showModal();
});

openGoldModal.addEventListener('click', () => {
    goldModal.showModal();
});

closeModal.forEach((button) => {
    button.addEventListener('click', () => {
        npModal.close();
        bronzeModal.close();
        silverModal.close();
        goldModal.close();
    });
});

const timestamp = document.querySelector('#timestamp');
timestamp.value = new Date().toString();