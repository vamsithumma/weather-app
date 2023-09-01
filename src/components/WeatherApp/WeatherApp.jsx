
import React from "react";
import './WeatherApp.css';
import search_icon from '../Assets/search.png';
import clear_icon from '../Assets/clear.png';
import cloud_icon from '../Assets/cloud.png';
import drizzle_icon from '../Assets/drizzle.png';
import rain_icon from '../Assets/rain.png';
import snow_icon from '../Assets/snow.png';
import wind_icon from '../Assets/wind.png';
import humidity_icon from '../Assets/humidity.png';

const WaeatherApp = ()=> {

    let api_key = "6557e15d870bf75914ad4e1304e4ccb6";

    const search = async () =>{
        const element= document.getElementsByClassName("cityInput");
        if(element[0].value === ""){
            return 0;
        }
        
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

        const humidity = document.getElementsByClassName("humidity-percent");
        const temperature = document.getElementsByClassName("weather-temp");
        const wind= document.getElementsByClassName("wind-rate");
        const location= document.getElementsByClassName("weather-location");

        try{
            let response = await fetch(url);
            let data = await response.json();
            humidity[0].innerHTML = data.main.humidity+" %";
            wind[0].innerHTML = data.wind.speed+ " km/h";
            temperature[0].innerHTML = data.main.temp+ " °c";
            location[0].innerHTML= data.name;
        }catch(err){
            alert("Wrong Location Entered - Please enter correct location");
        }
        
     }
  return (
    <div className='container'>
        <div className="top-bar">
            <input type="text" className="cityInput" placeholder="Search" />
            <div className="search-icon" onClick={()=>{search()}}>
                <img src={search_icon} alt="" />
            </div>
        </div>
        <div className="weather-image">
            <img src={cloud_icon} alt="" />
        </div>
        <div className="weather-temp">0°c</div>
        <div className="weather-location">No location</div>
        <div className="data-container">
            <div className="element">
                <img src={humidity_icon} alt="" className="icon"/>
                <div className="data">
                    <div className="humidity-percent">0%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={wind_icon} alt="" className="icon"/>
                <div className="data">
                    <div className="wind-rate">0 km/h</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default WaeatherApp;
