import './App.css'
import { useEffect, useState } from 'react'
import Sidebar from './components/layouts/Sidebar'
import Topbar from './components/layouts/Topbar'
import AirQuality from './components/weather/AirQuality'
import CurrentWeather from './components/weather/CurrentWeather'
import HourlyForecast from './components/weather/HourlyForecast'
import SevenDayForecast from './components/weather/SevenDayForecast'
import WeatherDetails from './components/weather/WeatherDetails'

function App() {
  const [city, setCity] = useState('');
    useEffect(() => {
    alert(" Weather Application is currently under development.");
  }, []);
  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        <Topbar setCity = {setCity}/>

        <div className="dashboard">

          <div className="current-weather-section">

            <CurrentWeather city = {city}/>

          </div>

          <div className="weather-details-section">

            <WeatherDetails />

          </div>

          <div className="hourly-forecast-section">

            <HourlyForecast />

          </div>

          <div className="air-quality-section">
            <AirQuality />
          </div>
          <div className="seven-day-forecast-section">

            <SevenDayForecast />
          </div>

        </div>

        <div className="dev-text">
          <p>
            Application Is Actively Developing, Sidebar will available in Hamburger for mobile view Please Wait For Some Time.....
          </p>
        </div>

      </main>
    </div>
  )
}

export default App