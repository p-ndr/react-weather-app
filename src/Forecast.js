import React, { useState, useEffect } from "react";
import OneForecastDay from "./OneForecastDay";
import axios from "axios";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  function updateForecastData(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  useEffect(() => {
    setLoaded(false);
  }, [props.longitude, props.latitude]);

  if (loaded) {
    return (
      <div className="row">
        {forecastData.map(function (dailyForecast, index) {
          if (index < 5) {
            return (
              <div className="col" key={index}>
                <OneForecastDay info={dailyForecast} day={index} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    let fUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.latitude}&lon=${props.longitude}&exclude=current,minutely,hourly,alert&appid=2405521babf79c19f0fb38e819429c5f&units=metric`;
    axios.get(fUrl).then(updateForecastData);
    return null;
  }
}
