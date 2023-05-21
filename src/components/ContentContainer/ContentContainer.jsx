import { useState, useEffect } from "react";
import CardWeather from "../CardWeather/CardWeather";
import "./ContentContainer.css";

const ContentContainer = ({ info }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const KEY = import.meta.env.VITE_API_KEY;
  const URI = `https://api.openweathermap.org/data/2.5/weather?q=${info}&units=metric&appid=${KEY}`;

  useEffect(() => {
    if (info) {
      (async () => {
        try {
          setLoading(true);
          const response = await fetch(URI);
          const data = await response.json();
          if (data.cod !== "404") {
            const {
              name,
              main: { temp, humidity },
              sys: { country },
              weather: [state],
              wind: { speed: wind },
            } = data;
            setData({ name, country, temp, humidity, state, wind });
          }
          setLoading(false);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [info]);

  return loading ? "Loading..." : <CardWeather data={data} />;
};

export default ContentContainer;
