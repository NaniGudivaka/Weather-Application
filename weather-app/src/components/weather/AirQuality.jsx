import "./airquality.css";

function AirQuality() {
  const aqi = 42;

  return (
    <section className="air-quality">
      <div className="air-quality-content">
        <h2>Air Quality Index</h2>

        <p className="air-quality-status">Good</p>

        <p className="air-quality-description">
          Air quality is satisfactory and poses little or no risk.
        </p>

        <button className="air-quality-link">
          See full report
          <span>→</span>
        </button>
      </div>

      <div className="aqi-gauge">
        <div className="aqi-circle">
          <span className="aqi-value">{aqi}</span>
          <span className="aqi-label">AQI</span>
        </div>
      </div>
    </section>
  );
}

export default AirQuality;