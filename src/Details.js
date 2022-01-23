import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";

export default function Details(props) {
  const defaultUnit = "metric";

  function getLocalTime() {
    var dt = props.weatherData.datetime;
    var hr = dt.getHours() < 10 ? "0" + dt.getHours() : dt.getHours();
    var min = dt.getMinutes() < 10 ? "0" + dt.getMinutes() : dt.getMinutes();
    var time = hr + ":" + min;
    return time;
  }

  return (
    <div className="row mt-5">
      <div className="col-sm-6 text-center ms-4 lh-base">
        <div className="city-name">{props.weatherData.city}</div>
        <Temperature
          temperature={props.weatherData.temperature}
          unit={defaultUnit}
          isForecast={false}
        />
        <div className="overall-weather">{props.weatherData.weatherState}</div>
        <div className="local-time mt-1">Last updated at {getLocalTime()}</div>
      </div>
      <div className="col-sm-5 mt-3">
        <WeatherIcon
          icon={props.weatherData.icon}
          description={props.weatherData.weatherState}
          iconsize={128}
        />
      </div>
      <div className="row mt-5 mb-4">
        <div className="col-sm-4">
          <div className="humidity">💧 {props.weatherData.humidity}%</div>
        </div>
        <div className="col-sm-4">
          <div className="pressure">ℹ️ {props.weatherData.pressure}kPa</div>
        </div>
        <div className="col-sm-4">
          <div className="wind-speed">🌫 {props.weatherData.windSpeed}km/h</div>
        </div>
      </div>
    </div>
  );
}
