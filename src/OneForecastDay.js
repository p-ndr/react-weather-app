import react from "react";
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";

export default function OneForecastDay(props) {
  const days = {
    0: "Sun",
    1: "Mon",
    2: "Tue",
    3: "Wed",
    4: "Thu",
    5: "Fri",
    6: "Sat",
  };

  return (
    <div className="daily-forecast">
      <div className="day">{days[props.day]}</div>
      <WeatherIcon
        icon={props.weather[0].icon}
        description={props.weather[0].description}
      />
      <div className="city-temp">
        <Temperature temperature={props.temp.max} unit="metric" />
        <Temperature temperature={props.temp.min} unit="metric" />
      </div>
    </div>
  );
}
