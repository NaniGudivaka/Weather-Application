import "./hourlyforecast.css";

const hourlyData = [
  { time: "Now", icon: "🌤️", temp: 26, precipitation: 5 },
  { time: "11 AM", icon: "🌤️", temp: 27, precipitation: 5 },
  { time: "12 PM", icon: "🌤️", temp: 28, precipitation: 5 },
  { time: "1 PM", icon: "☀️", temp: 28, precipitation: 10 },
  { time: "2 PM", icon: "🌤️", temp: 27, precipitation: 15 },
  { time: "3 PM", icon: "☁️", temp: 26, precipitation: 20 },
  { time: "4 PM", icon: "☁️", temp: 25, precipitation: 20 },
  { time: "5 PM", icon: "☁️", temp: 24, precipitation: 10 },
  { time: "6 PM", icon: "🌤️", temp: 23, precipitation: 5 },
  { time: "7 PM", icon: "🌅", temp: 22, precipitation: 5 },
  { time: "8 PM", icon: "🌙", temp: 21, precipitation: 5 },
];

function HourlyForecast() {
  return (
    <section className="hourly-forecast">
      <div className="hourly-header">
        <h2>Hourly Forecast</h2>

        <button className="view-hourly-btn">
          View Full Hourly
          <span>→</span>
        </button>
      </div>

      <div className="hourly-list">
        {hourlyData.map((hour, index) => (
          <div
            className={`hourly-item ${index === 0 ? "current-hour" : ""}`}
            key={hour.time}
          >
            <p className="hourly-time">{hour.time}</p>

            <div className="hourly-icon">{hour.icon}</div>

            <p className="hourly-temperature">{hour.temp}°</p>

            <div className="hourly-precipitation">
              <span>💧</span>
              {hour.precipitation}%
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HourlyForecast;