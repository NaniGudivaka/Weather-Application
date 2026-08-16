import {
  LayoutDashboard,
  Clock3,
  CalendarDays,
  Map,
  MapPin,
  Bell,
  Settings,
  CircleHelp,
  
} from "lucide-react";

import "./sidebar.css";

const menuItems = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    path: "/",
  },
  {
    label: "Hourly Forecast",
    icon: Clock3,
    path: "/hourly",
  },
  {
    label: "7 Day Forecast",
    icon: CalendarDays,
    path: "/forecast",
  },
  {
    label: "Maps",
    icon: Map,
    path: "/maps",
  },
  {
    label: "My Locations",
    icon: MapPin,
    path: "/locations",
  },
  {
    label: "Weather Alerts",
    icon: Bell,
    path: "/alerts",
  },
];

const secondaryItems = [
  {
    label: "Settings",
    icon: Settings,
    path: "/settings",
  },
  {
    label: "Help & Support",
    icon: CircleHelp,
    path: "/help",
  },
];

function Sidebar() {
  return (
    <aside className="sidebar">

      {/* This is the Logo with icon and Name  */}
      <div className="sidebar-logo">
        <div className="logo-icon">
          🌤️
        </div>

        <h1>
          Weather<span>App</span>
        </h1>
      </div>

      {/* Main Navigation */}
      <nav className="sidebar-nav">
        <div className="nav-section">

          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <a
                href={item.path}
                className={`nav-item ${
                  item.label === "Dashboard" ? "active" : ""
                }`}
                key={item.label}
              >
                <Icon size={21} strokeWidth={1.8} />

                <span>{item.label}</span>
              </a>
            );
          })}

        </div>

        {/* Divider */}
        <div className="nav-divider"></div>

        {/* Secondary Navigation */}
        <div className="nav-section">

          {secondaryItems.map((item) => {
            const Icon = item.icon;

            return (
              <a
                href={item.path}
                className="nav-item"
                key={item.label}
              >
                <Icon size={21} strokeWidth={1.8} />

                <span>{item.label}</span>
              </a>
            );
          })}

        </div>
      </nav>


      {/* Temperature Unit */}
      <div className="unit-switcher">

        <button className="unit-active">
          °C
        </button>

        <button>
          °F
        </button>

      </div>

      {/* Footer */}
      <div className="sidebar-footer">
        © 2026 WeatherApp
      </div>

    </aside>
  );
}

export default Sidebar;