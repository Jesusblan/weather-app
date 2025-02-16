storage = [];

class location {
    constructor(place, temp, feelTemp, precipitation, precipitationProb, humidity, windSpeed, conditions , description){
        this.place = place;
        this.temp = temp;
        this.feelTemp = feelTemp;
        this.precipitation = precipitation;
        this.precipitationProb = precipitationProb;
        this.humidity = humidity;
        this.windSpeed = windSpeed;
        this.conditions = conditions;
        this.description = description;
    }
}

function saveData(place, temp, feelTemp, precipitation, precipitationProb, humidity, windSpeed, conditions, description){
    let data =  new location(place, temp, feelTemp, precipitation, precipitationProb, humidity, windSpeed, conditions, description);
    storage.push(data);
}


fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/cadiz?unitGroup=us&key=PWUP89HBNGTGDR8K4BYC8LYPX&contentType=json', {mode: 'cors'})
.then(function(response) {
    return response.json();
})
.then(function(response) {
    let place = response.address;
    let temp = response.currentConditions.temp;
    let feelTemp = response.currentConditions.feelslike;
    let precipitation = response.currentConditions.precip;
    let precipitationProb = response.currentConditions.precipprob;
    let humidity = response.currentConditions.humidity;
    let windSpeed = response.currentConditions.windspeed;
    let conditions = response.currentConditions.conditions;
    let description = response.description;

    saveData(place, temp, feelTemp, precipitation, precipitationProb, humidity, windSpeed, conditions, description)
    console.log(response)
    console.log(storage)
});

