const apikey = "a27d1072d798c2e6d1219e8e4ca9b85c";
const apiURL = "https://api.openweathermap.org/data/2.5/weather? units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apikey}`);
    
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        let data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

    if(data.weather [0].main === "Clouds"){
        weatherIcon.src = "clouds.png";
    }else if(data.weather[0].main === "Clear"){
        weatherIcon.src = "clear.png";
    }else if(data.weather[0].main === "Rain"){
        weatherIcon.src = "rain.png";
    }else if(data.weather[0].main === "Drizzle"){
        weatherIcon.src = "drizzle.png";
    }else if(data.weather[0].main === "Mist"){
        weatherIcon.src = "mist.png";
    }
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

}

searchbtn.addEventListener("click", ()=>{
    checkWeather(searchbox.value);
})
