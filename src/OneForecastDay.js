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
        icon={props.info.weather[0].icon}
        description={props.info.weather[0].description}
        iconsize={45}
      />
      <div className="city-temp">
        <Temperature
          temperature={props.info.temp.max}
          unit="metric"
          isForecast={true}
        />
        &emsp;
        <span className="opacity-8">
          <Temperature
            temperature={props.info.temp.min}
            unit="metric"
            isForecast={true}
          />
        </span>
      </div>
    </div>
  );
}
