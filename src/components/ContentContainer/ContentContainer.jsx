import { useState, useEffect } from "react";

const ContentContainer = ({info}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);


  const KEY = import.meta.env.VITE_API_KEY;
  const URI = `https://api.openweathermap.org/data/2.5/weather?q=${info}&units=metric&appid=${KEY}`;

  useEffect(() => {
    if (info) {
      (async () => {
        try {
          const response = await fetch(URI);
          const data = await response.json();
          const {name, main, sys, weather: state, wind} = data;
          setData({name, main, sys, state, wind})
        } catch (error) {
          console.log(error);
        }
  
      })();
    }
  }, [info])

  return (
    <div>
      {data && console.log(data)}
    </div>
  );
};

export default ContentContainer;
