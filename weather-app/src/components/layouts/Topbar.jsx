import {
  Search,
  MapPin,
  Sun,
  Moon,
  Bell,
  ChevronDown,
} from "lucide-react";

import "./topbar.css";
import { useState } from "react";

function Topbar({setCity}) {

  const[darkMode, setDarkMode] = useState(false);
  const [input, setInput] = useState('');
  const [searchCity, setSearchCity] = useState('');

 async function handleSearch(){

  const trimmedCity = input.trim();

  if(!trimmedCity) {
    return;
  }try{
    const response = await fetch(`http://localhost:3000/api/weather?city=${encodeURIComponent(trimmedCity)}`);

    const data = await response.json();
    if(!response.ok){
      console.log(data.error);
    }
    console.log('Backend response', data);

    //send city to APP>JSX
    setCity(data.city)

    setSearchCity(data.city);
  }catch(error){
    console.log('Error connecting to backend:', error);

  }

  };
  
  return (
    <header className="topbar">

      {/* Search */}
      <div className="search-box">
        <button type="button"
        onClick={handleSearch}
        className="search-button">
        <Search size={20} strokeWidth={2} />
        </button>

        <input
          type="text"
          placeholder="Search for city, e.g., Hyderabad"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) =>{
            if(e.key === 'Enter'){
              handleSearch();
            }
          }}
        />
      </div>

      {/* Right Side */}
      <div className="topbar-actions">

        {/* Location */}
        <button className="location-selector">
          <MapPin size={19} />

          <span>{searchCity || 'Hyd, TG'}</span>

          <ChevronDown size={17} />
        </button>

        {/* Theme */}
        <div className="theme-switcher">

          <button className= {`theme-button ${!darkMode ? 'active' : ''} `} onClick={() => setDarkMode(false)}
            >
            <Sun size={20} />

          </button>

          <button className={`theme-button ${darkMode ? 'active' : ''}`} onClick={() => setDarkMode(true)} 
            >

            <Moon size={20} />

          </button>

        </div>

        {/* Notifications */}
        <button className="notification-button">
          <Bell size={21} />

          <span className="notification-dot"></span>
        </button>

        {/* User */}
        <div className="user-profile">

          <div className="user-avatar">
            N
          </div>

          <span className="user-name">
            Nani
          </span>

          <ChevronDown size={17} />

        </div>

      </div>

    </header>
  );
}

export default Topbar;