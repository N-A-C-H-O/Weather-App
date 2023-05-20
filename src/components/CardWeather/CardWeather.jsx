const CardWeather = ({ data }) => {
  return (
    <div>
      <h2>
        {data.name}, {data.country}
      </h2>
      <div>
        <p>Temperatura: {Math.round(data.temp)}°</p>
        <p>Humedad: {data.humidity}%</p>
        <p>Wind: {data.wind.speed}</p>
        <div>
          <p>{data.state.description}</p>
          <img src={`https://openweathermap.org/img/wn/${data.state.icon}@2x.png`} alt="icon weather" />
        </div>
      </div>
    </div>
  );
};

export default CardWeather;
