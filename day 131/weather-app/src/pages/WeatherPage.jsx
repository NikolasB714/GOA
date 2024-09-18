import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const WeatherPage = () => {
  const [weather, setWeather] = useState(null);
  const location = useLocation();
  const city = new URLSearchParams(location.search).get('city');

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`);
      const data = await response.json();
      setWeather(data);
    };

    fetchWeather();
  }, [city]);

  return (
    <div className="flex items-center justify-center h-screen">
      {weather ? (
        <div className="text-center">
          <h1 className="text-2xl font-bold">{weather.name}</h1>
          <p className="text-xl">{weather.weather[0].description}</p>
          <p className="text-lg">Temperature: {Math.round(weather.main.temp - 273.15)}°C</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeatherPage;
