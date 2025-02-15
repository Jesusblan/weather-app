
class location {
    constructor(place, temp, maxTemp, minTemp, precipitation, precipitationProb, humidity, windSpeed, conditions , description, icon){
        this.place = place;
        this.temp = temp;
        this.maxTemp = maxTemp;
        this.minTemp = minTemp;
        this.precipitation = precipitation;
        this.precipitationProb = precipitationProb;
        this.humidity = humidity;
        this.windSpeed = windSpeed;
        this.conditions = conditions;
        this.description = description;
        this.icon = icon;
    }
}

function saveData(place, temp, maxTemp, minTemp, precipitation, precipitationProb, humidity, windSpeed, conditions, description, icon){
    let data =  new location(place, temp, maxTemp, minTemp, precipitation, precipitationProb, humidity, windSpeed, conditions, description, icon);
    return data
}