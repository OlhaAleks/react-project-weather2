import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";
import { cleanup } from "@testing-library/react";

export default function WeatherForecast(props) {
    let [loated, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);

    //if coordinate change, set loated false. We use useEffect

    function handleResponse(response) 
    {
        setForecast(response.data.daily);
        setLoaded(true);
    }
    
    
    if (loated) {
        return (
            <div className="WeatherForecast">
                <div className="row">
                    {forecast.map(function(dailyForecast, index) {
                        if (index < 5) {
                            return (
                            <div className="col" key={index}>
                            <WeatherForecastDay data={dailyForecast} />
                            </div>
                            );
                        }
                    })}
                        
                </div>
            </div>
        );
        
    } else {
        let apiKey = "9eca7aac0b071aa16e3cb063adba0785";
        let latitude = props.coordinates.lat;
        let longitude = props.coordinates.lon;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    
        axios.get(apiUrl).then(handleResponse);
        return null;

    }

}