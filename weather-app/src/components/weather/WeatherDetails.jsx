import {
  Droplets,
  Wind,
  Gauge,
  Eye,
  Sun,
  CloudRain,
} from "lucide-react";

import "./WeatherDetails.css";

const weatherDetails = [
  {
    label: "Humidity",
    value: "62%",
    icon: Droplets,
  },
  {
    label: "Wind Speed",
    value: "14 km/h",
    icon: Wind,
  },
  {
    label: "Pressure",
    value: "1012 hPa",
    icon: Gauge,
  },
  {
    label: "Visibility",
    value: "10 km",
    icon: Eye,
  },
  {
    label: "UV Index",
    value: "5 Moderate",
    icon: Sun,
  },
  {
    label: "Precipitation",
    value: "20%",
    icon: CloudRain,
  },
];

function WeatherDetails() {
  return (
    <section className="weather-details">

      <div className="weather-details-header">
        <h2>Weather Details</h2>
        <p>Today's conditions</p>
      </div>

      <div className="weather-details-grid">
        {weatherDetails.map((item) => {
          const Icon = item.icon;

          return (
            <div className="detail-item" key={item.label}>
              <div className="detail-icon">
                <Icon size={20} />
              </div>

              <div className="detail-content">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}

export default WeatherDetails;