
import './App.css'
import Sidebar from './components/layouts/Sidebar'
import Topbar from './components/layouts/Topbar'
import CurrentWeather from './components/weather/CurrentWeather'
import HourlyForecast from './components/weather/HourlyForecast'
import WeatherDetails from './components/weather/WeatherDetails'

function App() {
  

  return (
    <>
    <div className='app-layout'>
      <Sidebar />

      <div className='main-content'>
        <Topbar />

       
        <div className='dashboard'>
          <CurrentWeather />
          <WeatherDetails />
          <HourlyForecast />
        </div>
        <div className='dev-text'>
          <p>Application Is Actively Developing Please Wait For Some Time.....</p>
        </div>

      </div>
      

    </div>
    
    
    
    </>
  )
}

export default App;
