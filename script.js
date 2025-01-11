const searchBtn = document.querySelector(".search-btn-main");
const inputSearch = document.querySelector(".input-search");
const newTemp = document.querySelector(".temp");
const weatherImg = document.querySelector(".weather-img")


const apiKey = "465cc38ded9ef4acbf989e98602d8d33";



async function checkWeather(newInputSearch) {
    const apiurl =`https://api.openweathermap.org/data/2.5/weather?q=${newInputSearch}&appid=${apiKey}&units=metric`;
    const response = await fetch(apiurl);
    const data = await response.json();

    newTemp.innerHTML = `${Math.round(data.main.temp)}°C`;
    newTemp.style.color="white";
    const tempMood = data.weather[0].main.toLowerCase();
    console.log(tempMood)
    let displayImg = document.createElement("img");
    weatherImg.appendChild(displayImg)

    switch(tempMood){
        case"clouds":
        displayImg.src ="images/clouds.png"
        break;

        case"clear":
        displayImg.src ="images/clear.png"
        break;

        case"drizzle":
        displayImg.src ="images/drizzle.png"
        break;

        case"mist":
        displayImg.src ="images/mist.png"
        break;

        case"humidity":
        displayImg.src ="images/humidity.png"
        break;

        case"rain":
        displayImg.src ="images/rain.png"
        break;
    }

    console.log(data)
}

searchBtn.addEventListener("click", ()=>{
    let newInputSearch = inputSearch.value.trim();
    console.log(newInputSearch)
    checkWeather(newInputSearch);
    
});

