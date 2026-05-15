const navbutton = document.querySelector('#ham-btn');
const navbar = document.querySelector('#nav-bar');

navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navbar.classList.toggle('show');
});


/* date */
const today = new Date();
const year = today.getFullYear();

document.getElementById('currentyear').innerHTML = year;
document.getElementById('lastModified').innerHTML = `Last Modification: ${document.lastModified}`;