import "./App.css";
import WeatherAppForm from "./WeatherAppForm";

function App() {
  return (
    <div className="App container-fluid">
      <WeatherAppForm />
      <div className="row mt-4">
        <div className="dev-details">
          <a
            href="https://github.com/parnian-naderi/react-weather-app"
            target="_blank"
            rel="noreferrer noopener"
            className="source-code"
          >
            Open source code
          </a>{" "}
          developed by{" "}
          <a
            href="https://parnian.netlify.app"
            target="_blank"
            rel="noreferrer noopener"
            className="dev-github"
          >
            Parnian Naderi
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
