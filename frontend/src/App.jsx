import React , {useState} from "react";
import WeatherCard from "./components/WeatherCard";
import SearchBar from "./components/SearchBar";
import "./styles/styles.css"

function App(){
    const [city , setCity] = useState("");
    const [weatherData , setWeatherData] = useState(null);
    const [error , setError] = useState("");

        async function fetchWeather(cityName) {
            try {
                setError("");
                setWeatherData(null);

                const response = await fetch(`/api/weather?city=${cityName}`);
                const data = await response.json();

                if (data.error) {
                setError(data.error);
                } else {
                setWeatherData(data);
                }
            } catch (err) {
                setError("Unable to fetch data for " + cityName + ". Please try again!");
            }
            }

    return (
        <div className="App">
            <h1 className="heading">SkyCast</h1>
            <SearchBar fetchWeather={fetchWeather} /> 
            {error && <p>{error}</p>}
            {weatherData && <WeatherCard weather={weatherData} />}
        </div>
    )

}

export default App;