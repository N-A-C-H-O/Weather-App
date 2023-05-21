import { useState } from "react";
import Search from "../Search/Search";
import ContentContainer from "../ContentContainer/ContentContainer";
import "./WeatherContainer.css";

const WeatherContainer = () => {
  const [info, setInfo] = useState("");

  return (
    <div className="weather-container">
      <Search setInfo={setInfo} />
      <ContentContainer info={info} />
    </div>
  );
};

export default WeatherContainer;
