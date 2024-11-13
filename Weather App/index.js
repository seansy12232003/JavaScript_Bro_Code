
const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = ""; // DELETE AFTER USE

weatherForm.addEventListener("submit", async event => { // need async to use await
    
    event.preventDefault(); // prevents default refreshing page when submitting button

    const city = cityInput.value

    if(city){
        try{
            const weatherData = await getWeatherData(city); // need async function to use await
            displayWeatherInfo(weatherData);
        }
        catch(error){
            console.error(error);
            displayError(error);
        }
    }
    else{
        displayError("Please enter a city");
    }

});

async function getWeatherData(city){

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await fetch(apiUrl);

    console.log(response);

    if(!response.ok){
        throw new Error("Could not fetch weather data");
    }

    return await response.json();

}

function displayWeatherInfo(data){ // data in json format
    
    const {name: city, 
           main: {temp, humidity}, 
           weather: [{description, id}]} = data;
    
    card.textContent = ""; // reset card, like if it had error message
    card.style.display = "flex"

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    cityDisplay.textContent = city;
    // tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`; // celsius
    tempDisplay.textContent = `${((temp - 273.15) * 9/5 + 32).toFixed(1)}°F`;
    humidityDisplay.textContent = `Humidity: ${humidity}`;
    descDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);

    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    weatherEmoji.classList.add("weatherEmoji");

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatherId){
    switch(true){
        case (weatherId >= 200 && weatherId < 300): // thunderstorm
            return "⛈️";
        case (weatherId >= 300 && weatherId < 400): // drizzle
            return "🌧️";
        case (weatherId >= 500 && weatherId < 600): // thunderstorm
            return "🌧️";
        case (weatherId >= 600 && weatherId < 700): // thunderstorm
            return "❄️";
        case (weatherId >= 700 && weatherId < 800): // thunderstorm
            return "🌫️";
        case (weatherId === 800): // thunderstorm
            return "☀️";
        case (weatherId >= 801 && weatherId < 810): // thunderstorm
            return "☁️";
        default:
            return "❓";
    }
}

function displayError(message){

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add(".errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);

}