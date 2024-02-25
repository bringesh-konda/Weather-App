document.getElementById('location-form').addEventListener('submit', getWeather);

async function getWeather(event) 
{
  event.preventDefault();
  const cityName = document.getElementById('location-input');
  try
  {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=457d1755eb137fc28f62d97cfb410cba&units=metric`);
    if(!response.ok){
      throw new Error();
    }
    const data = await response.json();

    document.getElementById('city').innerHTML = data.name;
    document.getElementById('temp').innerHTML = Math.round(data.main.temp) + "°c";
    document.getElementById('humidity').innerHTML = data.main.humidity + "%";
    document.getElementById('wind').innerHTML = data.wind.speed + " km/h";

    weatherIcon = document.querySelector(".weather-icon");
    weatherIcon.src = `images/${data.weather[0].main}.png`;

    document.querySelector('.error').style.display = "none";
    document.querySelector('#weather-data').style.display = "block";
  }
  catch(err)
  {
    document.querySelector('#weather-data').style.display = "none";
    document.querySelector('.error').style.display = "block";
  }
}