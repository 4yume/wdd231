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

//home.html
//weather
const weatherIcon = document.querySelector('#weather-icon');
const currentTemp = document.querySelector('#temp');
const desc = document.querySelector('#desc');
const humidity = document.querySelector('#humidity');

const forecastContainer = document.querySelector('#forecast-container');


const appid = "f55791f557bf97fb5986aaf09e76ec91"
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=49.74&lon=6.64&appid=${appid}&units=imperial`
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=49.74&lon=6.64&appid=${appid}&units=imperial`

async function apiFetch() {
    try {
        const response = await fetch(weatherUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        }
        else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    desc.innerHTML = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);
    humidity.innerHTML = `Humidity: ${data.main.humidity}`;
}

async function getForcast() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayForecast(data);
        }
        else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

function displayForecast(data) {
    const forecast = data.list.filter(item =>
        item.dt_txt.includes('12:00:00')
    );

    forecast.slice(0, 3).forEach(day => {
        const forecastDate = new Date(day.dt_txt);
        const dayName = forecastDate.toLocaleDateString('en-US', {
            weekday: 'long'
        });

        const temperature = Math.round(day.main.temp);
        const forecastCard = document.createElement('div');

        forecastCard.innerHTML = `
        <p>${dayName}: <span>${temperature}&deg;F</span></p>
        `;

        forecastContainer.appendChild(forecastCard);
    });
}

getForcast();


//spotlight
const spotlight = document.querySelector('#spotlight-container');
const membersUrl = 'data/members.json';

async function getSpotlights() {
    try {
        const response = await fetch(membersUrl);
        if (response.ok) {
            const data = await response.json();
            displaySpotlights(data);
        }
        else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

function displaySpotlights(data){
    const filterMembers = data.filter(member =>
        member.level === 2 || member.level === 3
    );

    const selectedMembers = [];
    while (selectedMembers.length < 3) {
        const randomIndex = Math.floor(Math.random() * filterMembers.length);

        const randomMember = filterMembers[randomIndex];

        if (!selectedMembers.includes(randomMember)) {
            selectedMembers.push(randomMember);
        }
    }
     
    selectedMembers.forEach(member => {
        const card = document.createElement('section');
        card.innerHTML = `
        <p>${member.name}</p>
        <img src="images/${member.image}" alt="${member.name} logo">
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <p>${member.url}</p>
        <p>${member.level === 3 ? 'Gold Member' : 'Silver Member'}</p>
        `;

        spotlight.appendChild(card);
    });
}

getSpotlights();