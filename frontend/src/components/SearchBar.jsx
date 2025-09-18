import React, { useState } from "react";

function SearchBar({fetchWeather }) {
  const [city, setCity] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    fetchWeather(city);
    setCity("")
  }

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        className="searchbar"
        type="text"
        placeholder="Enter city name...."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <div><button type="submit" className="submit">🔎</button></div>
      
    </form>
  );
}

export default SearchBar;
