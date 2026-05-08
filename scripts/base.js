const navbutton = document.querySelector('#ham-btn');
const navbar = document.querySelector('#nav-bar');

navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navbar.classList.toggle('show');
});
