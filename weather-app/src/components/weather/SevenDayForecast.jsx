import "./sevendayforecast.css";

const forecastData = [
  {
    day: "Wed",
    date: "21 May",
    icon: "🌤️",
    high: 28,
    low: 18,
    precipitation: 5,
  },
  {
    day: "Thu",
    date: "22 May",
    icon: "☀️",
    high: 29,
    low: 19,
    precipitation: 5,
  },
  {
    day: "Fri",
    date: "23 May",
    icon: "🌤️",
    high: 27,
    low: 17,
    precipitation: 10,
  },
  {
    day: "Sat",
    date: "24 May",
    icon: "🌧️",
    high: 24,
    low: 16,
    precipitation: 60,
  },
  {
    day: "Sun",
    date: "25 May",
    icon: "🌧️",
    high: 23,
    low: 15,
    precipitation: 60,
  },
  {
    day: "Mon",
    date: "26 May",
    icon: "🌤️",
    high: 26,
    low: 17,
    precipitation: 10,
  },
  {
    day: "Tue",
    date: "27 May",
    icon: "☀️",
    high: 28,
    low: 18,
    precipitation: 5,
  },
];

function SevenDayForecast() {
  return (
    <section className="seven-day-forecast">

      <div className="seven-day-header">
        <h2>7 Day Forecast</h2>

        <button className="view-seven-day-btn">
          View Full 7 Days
          <span>→</span>
        </button>
      </div>

      <div className="forecast-list">

        {forecastData.map((day) => (
          <div className="forecast-item" key={day.day}>

            <div className="forecast-day">
              {day.day}
            </div>

            <div className="forecast-date">
              {day.date}
            </div>

            <div className="forecast-icon">
              {day.icon}
            </div>

            <div className="forecast-high">
              {day.high}°
            </div>

            <div className="forecast-low">
              {day.low}°
            </div>

            <div className="forecast-precipitation">
              <span>💧</span>
              {day.precipitation}%
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default SevenDayForecast;