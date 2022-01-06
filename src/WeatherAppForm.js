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
