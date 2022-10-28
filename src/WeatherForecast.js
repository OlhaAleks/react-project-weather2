import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {

    function handleResponse(response) 
    {
        console.log(response.data);
    }
    
    let apiKey = "5d30b474d4ae284fe49b962e45b136f7";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">Thu</div>
                    <div className="Forecast-icon">
                <WeatherIcon code="01d" size={30} />
                </div>
                <div className="WeatherForecast-temperatures">
                    <span className="WeatherForecast-max">19°</span>
                    <span className="WeatherForecast-min">9°</span>
                </div>
                </div>

               
            </div>
        </div>
    );
}