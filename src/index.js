import "./styles.css";
import { storage } from "./home.js";
export {renderHome}


// DONE! add a class to construc objects with the info i want from the api
// DONE! add the async function to fetch info from the api
// DONE! add a function to construct a new object with the fetched info
// DONE! a function to add the object to the dom and diplay it
// make the search bar usable
// add default locations to display at start
// ...
// profit(hopefully...)

const container = document.getElementById("container");

function renderHome(){
    storage.forEach(data =>{
    let defaultCard = document.createElement("div")
    defaultCard.classList.add("card")
    defaultCard.innerHTML = `
    <h2>${data.place}</h2>
    <h4>${data.conditions}</h4>
    <p>Temp: ${data.temp}F feeling like ${data.feelTemp}F</p>
    <p>${data.precipitationProb} % probability of rain ${data.precipitation} l/m.</p>
    <p>Wind speed: ${data.windSpeed} mph</p>
    <p>Relative humidity of ${data.humidity}</p>
    <p>${data.description}</p>
    `
container.appendChild(defaultCard)
})
}


