import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState(props.unit);

  function convertToCelsius(event) {
    event.preventDefault();
    if (unit.toLowerCase() === "imperial") {
      setUnit("metric");
    }
  }

  function convertToFahrenheit(event) {
    event.preventDefault();
    if (unit.toLowerCase() === "metric") {
      setUnit("imperial");
    }
  }
  if (unit.toLowerCase() === "imperial") {
    return (
      <div className="city-temp">
        {Math.round(1.8 * props.temp + 32)}
        <sup className="unit">
          <a href="/" onClick={convertToCelsius} className="convert-unit">
            °C
          </a>{" "}
          | °F
        </sup>
      </div>
    );
  } else {
    return (
      <span className="city-temp">
        {Math.round(props.temp)}
        <sup className="unit">
          °C |{" "}
          <a href="/" onClick={convertToFahrenheit} className="convert-unit">
            °F
          </a>
        </sup>
      </span>
    );
  }
}
