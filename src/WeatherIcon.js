import React from "react";
import ReactAnimatedWeather from "react-animated-weather/build/ReactAnimatedWeather";

export default function WeatherIcon(props) {
  const iconMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "10d": "RAIN",
    "10n": "RAIN",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "WIND",
  };
  if (props.code in iconMapping) {
    return (
      <div className="weather-img">
        <ReactAnimatedWeather
          icon={iconMapping[props.code]}
          color="#e6e2eb"
          size={128}
          animate={true}
        />
      </div>
    );
  } else {
    let imgURL = `http://openweathermap.org/img/wn/${props.code}@2x.png`;
    return (
      <div className="weather-img">
        <img src={imgURL} alt={props.description} />
      </div>
    );
  }
}
