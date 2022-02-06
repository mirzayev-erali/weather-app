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
    console.log(weather)
}