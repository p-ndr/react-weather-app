import axios from "axios";
import { useState } from "react";
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";

export default function Details(props) {
  const [temperature, setTemperature] = useState(null);
  const [weatherState, setWeatherState] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [pressure, setPressure] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);
  const [icon, setIcon] = useState(null);
  let [localTime, setLocalTime] = useState(null);
  const defaultUnit = "metric";

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=2405521babf79c19f0fb38e819429c5f&units=${defaultUnit}`;

  axios.get(url).then(setInfo);

  function setInfo(response) {
    getWeatherState(response);
    getHumidity(response);
    getPressure(response);
    getWindSpeed(response);
    getIcon(response);
    getLocalTime(response);
    setTemperature(Math.round(response.data.main.temp));
  }

  function getWeatherState(response) {
    setWeatherState(response.data.weather[0].description);
  }

  function getHumidity(response) {
    setHumidity(Math.round(response.data.main.humidity));
  }

  function getPressure(response) {
    setPressure(Math.round(response.data.main.pressure));
  }

  function getWindSpeed(response) {
    setWindSpeed(Math.round(response.data.wind.speed));
  }

  function getIcon(response) {
    setIcon(response.data.weather[0].icon);
  }

  function getLocalTime(response) {
    var datetime = new Date(response.data.dt * 1000);
    var hr =
      datetime.getHours() < 10
        ? "0" + datetime.getHours()
        : datetime.getHours();
    var min =
      datetime.getMinutes() < 10
        ? "0" + datetime.getMinutes()
        : datetime.getMinutes();
    var time = hr + ":" + min;
    setLocalTime(time);
  }

  return (
    <div className="row mt-5">
      <div className="col-sm-6 text-center ms-4 lh-base">
        <div className="city-name">{props.city}</div>
        <Temperature temp={temperature} unit={defaultUnit} />
        <div className="overall-weather">{weatherState}</div>
        <div className="local-time mt-1">Last updated at {localTime}</div>
      </div>
      <div className="col-sm-5 mt-3">
        <WeatherIcon code={icon} description={weatherState} />
      </div>
      <div className="row my-5">
        <div className="col-sm-4">
          <div className="humidity">💧 {humidity}%</div>
        </div>
        <div className="col-sm-4">
          <div className="pressure">ℹ️ {pressure}kPa</div>
        </div>
        <div className="col-sm-4">
          <div className="wind-speed">🌫 {windSpeed}km/h</div>
        </div>
      </div>
    </div>
  );
}
