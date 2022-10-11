import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-6">
                <input type="search" placeholder="Type a city.." className="form-typing" />
                </div>
                <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary" />
                </div>
                </div>
            </form>
            <h1>Lisbon</h1>
            <ul>
                <li>Tuesday 07:00</li>
                <li>Mostly cloudy</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="cold-weather" />
                    6°C
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation: 15%</li>
                        <li>Humidity: 72%</li>
                        <li>Wind: 13km/h</li>
                    </ul>
                </div>
            </div>
            </div>
    );
}
