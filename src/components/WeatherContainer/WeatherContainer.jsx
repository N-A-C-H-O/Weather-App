import { useState } from "react";
import Search from "../Search/Search";
import ContentContainer from "../ContentContainer/ContentContainer";

const WeatherContainer = () => {
  const [info, setInfo] = useState("");

  return (
    <div>
      <Search setInfo={setInfo} />
      <ContentContainer info={info} />
    </div>
  );
};

export default WeatherContainer;
