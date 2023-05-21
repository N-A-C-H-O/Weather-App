import "./CardWeather.css";

const CardWeather = ({ data }) => {
  return (
    <div className="weather-card">
      <h2>
        {data.name}, {data.country}
      </h2>
      <p className="weather-info">{data.state.description}</p>
      <div className="weather-state">
        <img src={`https://openweathermap.org/img/wn/${data.state.icon}@2x.png`} alt="icon weather" />
        <div>
          <h3>{Math.round(data.temp)}°</h3>
        </div>
      </div>
    </div>
  );
};

export default CardWeather;
