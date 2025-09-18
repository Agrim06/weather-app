import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "../frontend/build")));


app.get("/api/weather" , async(req , res)=>{
    const city = req.query.city;

    if(!city){
        return res.status(400).json({error:"city is required!"});
    }
    try{
        const apiKey = process.env.OPENWEATHER_API_KEY;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        const response = await axios.get(url);
        const data = response.data;

        const weatherData={
            city : data.name,
            temperature: data.main.temp,
            description : data.weather[0].description,
            humidity : data.main.humidity,
            wind: data.wind.speed
        };

        res.json(weatherData);
    }
        catch(err){
            res.status(500).json({error:"Unable to fetch weather data"});
        }
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});