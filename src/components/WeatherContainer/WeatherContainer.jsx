import Search from "../Search/Search";
import { useState } from "react";

const WeatherContainer = () => {
  const [info, setInfo] = useState("");

  return (
    <div>
      <Search setInfo={setInfo} />
    </div>
  );
};

export default WeatherContainer;
