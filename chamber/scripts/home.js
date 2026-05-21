//home.html
//weather
const weatherIcon = document.querySelector('#weather-icon');
const currentTemp = document.querySelector('#temp');
const desc = document.querySelector('#desc');
const humidity = document.querySelector('#humidity');


const appid = "f55791f557bf97fb5986aaf09e76ec91"
const wurl = `https://api.openweathermap.org/data/2.5/weather?lat=49.74&lon=6.64&appid=${appid}&units=imperial`

async function apiFetch() {
    try {
        const response = await fetch(wurl);
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
    weatherIcon.setAttribute('alt', desc);
    humidity.innerHTML = `Humidity: ${data.main.humidity}`;
}