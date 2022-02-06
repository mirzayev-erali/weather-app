"use strict"
const api = {
    key: '2dfbfe3763f970df637991f2e48d7730',
    baseurl: 'https://api.openweathermap.org/data/2.5/',
};

const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('keypress', setQuery)

function setQuery(e) {
 if(e.keyCode == 13) {
     getResults(searchBox.value)
     console.log(searchBox.value)
 }
}

function getResults(query) {
fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
        return weather.json()
    }) .then(displayResults)
}
function displayResults(weather) {
    console.log(weather);
    let city = document.querySelector('.location .city');
    city.innerHTML = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector('.date');
    date.innerHTML = dateBuilder(now);

    let temp = document.querySelector('.temp');
    temp.innerHTML = `${weather.main.temp}<span>°C</span>`;

    let condition = document.querySelector('.weather-con');
    condition.innerHTML = `${weather.weather[0].main}`

    let hiLow = document.querySelector('.hi-low');
    hiLow.innerHTML = `${weather.main.temp_min}°C / ${weather.main.temp_max}°C`

}

function dateBuilder(s) {
    let months = [
        'January',
'February',
'March',
'April',
'May',
'June',
'July',
'August',
'September',
'October',
'November',
'December'
    ];
    let days = ['Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'];

    let day  = days[s.getDay()];
    let date  = s.getDate();
    let month = months[s.getMonth()];
    let year = s.getFullYear();

    return ` ${day}, ${date} ${month}  ${year} `
}