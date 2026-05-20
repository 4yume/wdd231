const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const caption = document.querySelector('figcaption');

const appid = "f55791f557bf97fb5986aaf09e76ec91"

const url = `https://api.openweathermap.org/data/2.5/weather?lat=49.74&lon=6.64&appid=${appid}&units=imperial`


async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        }
        else {
            throw Error(await response.text())
        }
    } catch (error) {
        console.error(error);
    }
}

apiFetch();


function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc)
    weatherIcon.setAttribute('alt', data.weather[0].description)
    caption.textContent = `${desc}`
}