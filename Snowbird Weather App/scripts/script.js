// Create global array to hold weather data
let weatherData = [];

// Get weather data through weather api
const GetWeatherData = async () =>
{
    apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=40.5829&lon=111.6556&appid=ac915a6d1258935157073b6ba78cb9f4&units=imperial"

    try
    {
        const response = await fetch(apiUrl);
        weatherData = await response.json();
        // Grab the current temperature and instert into the dom element id temperature
        const temp = document.querySelector("#temperature");
        temp.innerHTML = weatherData.main.temp + " °F";
        return Promise.resolve(weatherData.main.temp);
    }
        catch
        {
            console.log("Error getting weather data")
        }
}
GetWeatherData();

// Create arrays for things that you can do based on the temp
let winterActivities = [
    "Skiing or snowboarding",
    "Snowshoeing",
    "Ice fishing"
  ];

let warmerActivities = [
    "Hiking",
    "Mountain biking",
    "Rock climbing"
  ];
// Global temp var
async function GiveSuggestion()
{
    try
    {
        
        const temperature = await GetWeatherData();
        if(temperature < 45)
        {
            let randIndex = Math.floor(Math.random() * winterActivities.length)
            document.querySelector("#suggg").innerHTML = winterActivities[randIndex];
        }
        else if(temperature >= 45)
        {
            let randIndex = Math.floor(Math.random() * winterActivities.length)
            document.querySelector("#suggg").innerHTML = warmerActivities[randIndex];
        }


    }
    catch
    {
        console.log("Error in GiveSuggestion")
    }
}
GiveSuggestion();


