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

function Topbar() {

  const[darkMode, setDarkMode] = useState(false);
  
  return (
    <header className="topbar">

      {/* Search */}
      <div className="search-box">
        <Search size={20} strokeWidth={2} />

        <input
          type="text"
          placeholder="Search for city, e.g., Hyderabad"
        />
      </div>

      {/* Right Side */}
      <div className="topbar-actions">

        {/* Location */}
        <button className="location-selector">
          <MapPin size={19} />

          <span>Hyd, TG</span>

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