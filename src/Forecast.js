import React, { useState } from "react";
import OneForecastDay from "./OneForecastDay";
import axios from "axios";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  function updateForecastData(response) {
    setForecastData(response.data.daily);
    console.log(forecastData);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="row">
        {forecastData.map(function (dailyForecast, index) {
          return (
            <div className="col-sm" key={index}>
              <OneForecastDay info={dailyForecast} day={index} />
            </div>
          );
        })}
      </div>
    );
  } else {
    let fUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.latitude}&lon=${props.longitude}&exclude=current,minutely,hourly,alert&appid=2405521babf79c19f0fb38e819429c5f&units=metric`;
    axios.get(fUrl).then(updateForecastData);
    return null;
  }
}
