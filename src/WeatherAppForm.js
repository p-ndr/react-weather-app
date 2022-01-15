import axios from "axios";
import { useState } from "react";
import Details from "./Details";
import { Rings } from "react-loader-spinner";
import Forecast from "./Forecast";

export default function WeatherAppForm() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=Shiraz&appid=2405521babf79c19f0fb38e819429c5f&units=metric`;
    axios.get(url).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (event.target.text.value !== "") {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${event.target.text.value}&appid=2405521babf79c19f0fb38e819429c5f&units=metric`;
      axios.get(url).then(handleResponse);
    } else {
      alert("Please enter a city!");
    }
  }

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      weatherState: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      windSpeed: response.data.wind.speed,
      datetime: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      latitude: response.data.coord.lat,
      longitude: response.data.coord.lon,
    });
  }

  function showCurrentLocation(event) {
    event.preventDefault();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          var lat = position.coords.latitude;
          var lon = position.coords.longitude;
          let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2405521babf79c19f0fb38e819429c5f&units=metric`;
          axios.get(url).then((response) => {
            handleResponse(response);
          });
        },
        (error) => {
          console.log("error: " + error.code + " " + error.message);
        }
      );
    }
  }
  if (weatherData.ready) {
    return (
      <div className="container-fluid">
        <form className="mt-5 pt-2" onSubmit={handleSubmit}>
          <div className="row mt-4 d-flex flex-sm justify-content-evenly">
            <div className="col-sm-6">
              <input
                type="text"
                name="text"
                className="search-bar w-100"
                placeholder="Type a city..."
              />
            </div>
            <div className="col-sm-2">
              <input
                type="submit"
                value="Search"
                className="search-button w-100"
              />
            </div>
            <div className="col-sm-2">
              <button
                className="current-location w-100"
                onClick={showCurrentLocation}
              >
                Current
              </button>
            </div>
          </div>
          <Details weatherData={weatherData} />
          <div className="row pb-3 d-flex justify-content-around">
            <Forecast
              latitude={weatherData.latitude}
              longitude={weatherData.longitude}
            />
          </div>
        </form>
      </div>
    );
  } else {
    search();
    return (
      <div className="pre-process">
        <h1 className="loading mx-auto my-5">Loading...</h1>
        <div className="load-animation">
          <Rings arialLabel="loading-indicator" secondaryColor="#000" />
        </div>
      </div>
    );
  }
}
