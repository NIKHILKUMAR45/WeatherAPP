import "./current-weather.css";

const currentweather = ({ data }) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city-name">{data.city}</p>
          <p className="weather-discription">{data.weather[0].description}</p>
        </div>
        <img
          alt="weather"
          className="weather-icons"
          src={`icons/${data.weather[0].icon}.png`}
        />
      </div>

      <div className="bottom">
        <p className="temperature"> {Math.round(data.main.temp)}°C </p>
        <div className="details">
          <div className="paragraph-row">
            <span className="paragraph-label">Details</span>
          </div>
          <div className="paragraph-row">
            <span className="parameter-label"> feels like</span>
            <span className="parameter-value">
              {" "}
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className="paragraph-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value"> {data.wind.speed}m/s</span>
          </div>
          <div className="paragraph-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value"> {data.main.humidity}%</span>
          </div>
          <div className="paragraph-row">
            <div className="parameter-label">Pressure</div>
            <div className="parameter-value"> {data.main.pressure} hpa</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default currentweather;
