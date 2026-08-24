import { MapPin, Thermometer, Droplets, Wind } from "lucide-react";

import "./currentweather.css";

function CurrentWeather({weatherData}) {
  console.log(weatherData);
  // if(!weatherData){
  //   return null;
  // }
 


  return (
    <section className="current-weather">
      <div className="current-weather-header">
        <div>
          <p className="weather-label">Current Weather</p>

          <div className="weather-location">
            <MapPin size={17} />
            <span>{weatherData?.city || 'Search a city'}</span>
            
          </div>
        </div>

        <p className="weather-date">Today, August 16</p>
      </div>

      <div className="current-weather-main">
        <div className="weather-icon">
          ☀️
        </div>

        <div className="temperature-section">
          <h2>
            {weatherData?.temperature ?? '--'}
            {weatherData?.temperatureUnit || ''}
          </h2>
          <p>{weatherData?.condition || 'Search for a city'}</p>
        </div>
      </div>

      <div className="weather-summary">
        <div className="summary-item">
          <Thermometer size={18} />
          <div>
            <span>Feels like</span>
            <strong>
              {weatherData?.feelsLike ?? '--'}
            </strong>
          </div>
        </div>

        <div className="summary-item">
          <Droplets size={18} />
          <div>
            <span>Humidity</span>
            <strong>
              {weatherData?.humidity ?? '--'}
            </strong>
          </div>
        </div>

        <div className="summary-item">
          <Wind size={18} />
          <div>
            <span>Wind</span>
            <strong>
              {weatherData?.windSpeed ?? '--'}
            </strong>
          </div>
        </div>
      </div>

      <div className="temperature-range">
        <span>High <strong>31°</strong></span>
        <span>Low <strong>23°</strong></span>
      </div>
    </section>
  );
}

export default CurrentWeather;