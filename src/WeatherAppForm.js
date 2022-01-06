import axios from "axios";
import { useState } from "react";
import Details from "./Details";

export default function WeatherAppForm() {
  const [city, setCity] = useState("Shiraz");

  function updateCity(event) {
    event.preventDefault();
    if (event.target.text.value !== "") {
      setCity(event.target.text.value);
    }
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
            setCity(response.data.name);
          });
        },
        function (error) {
          console.log("error: " + error.code + " " + error.message);
        }
      );
    }
  }

  return (
    <div className="container-fluid">
      <form className="mt-5 pt-2" onSubmit={updateCity}>
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
        <Details city={city} />
      </form>
    </div>
  );
}
