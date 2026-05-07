//store the selected elements that we are going to use
const navbutton = document.querySelector('#ham-btn');

//toggle the show class off and on
navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
});

const navBar = document.querySelector('#nav-bar');

navbutton.addEventListener('click', () => {
    navbutton.classList.toggle("show");
    navBar.classList.toggle('show');
});