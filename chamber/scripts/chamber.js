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


/* company */
const url = "data/members.json";

const cards = document.querySelector('#cards');

async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();

    displayMembers(data);
}

const displayMembers = (members) => {
    members.forEach((member) => {
        const card = document.createElement("section");
        const name = document.createElement("p");
        const address = document.createElement("p");
        const phone = document.createElement("p");
        const website = document.createElement("a");
        const image = document.createElement("img");
        const level = document.createElement("p");
        const industry = document.createElement("p");

        name.textContent = member.name;
        address.textContent = member.address;
        phone.textContent = member.phone;
        website.text = member.url;
        website.href = `https://${member.url}`;

        level.textContent = `Membership Level: ${member.level}`;
        industry.textContent = member.industry;

        //image 
        image.setAttribute('src', `images/${member.image}`);
        image.setAttribute('alt', member.name);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', "340");
        image.setAttribute('height', '440');

        //append the section with created elements
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(image);
        card.appendChild(website);
        card.appendChild(level);
        card.appendChild(industry);

        cards.appendChild(card);
    });
};

getMembers();


//grid and list buttons
const gridbutton = document.querySelector('#grid');
const listbutton = document.querySelector('#list');

gridbutton.addEventListener('click', () => {
    cards.classList.add('grid');
    cards.classList.remove('list');
});


listbutton.addEventListener('click', () => {
    cards.classList.add('list');
    cards.classList.remove('grid');
});