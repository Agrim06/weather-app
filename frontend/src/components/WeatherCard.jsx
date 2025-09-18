import React from "react";

function WeatherCard({ weather }) {
  return (
    <div className="weather-card">
      <h2 className="city">{weather.city}</h2>
      <p>🌡️ {weather.temperature}°C</p>
      <p>☁️ {weather.description}</p>
      <p>💧 Humidity: {weather.humidity}%</p>
      <p>🌬️ Wind: {weather.wind} km/h</p>
    </div>
  );
}

export default WeatherCard;
