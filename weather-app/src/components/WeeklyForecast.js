import React from "react";
import "./WeeklyForecast.css";
import DailyForecast from "./DailyForecast";
import atmosphere from '../icons/atmosphere.svg'
import Clear from '../icons/Clear.svg'
import Clouds from '../icons/Clouds.svg'
import Drizzle from '../icons/Drizzle.svg'
import Rain from '../icons/Rain.svg'
import Snow from '../icons/Snow.svg'
import Thunder from '../icons/Thunder.svg'

function WeeklyForecast({ city, weeklyObj, currentObj}) {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  let dt = new Date(currentObj.dt*1000)
  let fullDate = dt.toLocaleDateString("en-US", options);

  function intoIcon (mainWeather) {
    let atm = ["Mist", "Smoke", "Haze", "Dust", "Fog", "Sand", "Dust", "Ash", "Squall", "Tornado"]
    if (atm.includes(mainWeather)){
      return <img className="conditionIcon1" src={atmosphere} alt={mainWeather}></img>
    } else if (mainWeather === "Clear"){
      return <img className="conditionIcon1" src={Clear} alt={mainWeather}></img>
    } else if (mainWeather === "Clouds"){
      return <img className="conditionIcon1" src={Clouds} alt={mainWeather}></img>
    } else if (mainWeather === "Drizzle"){
      return <img className="conditionIcon1" src={Drizzle} alt={mainWeather}></img>
    } else if (mainWeather === "Rain"){
      return <img className="conditionIcon1" src={Rain} alt={mainWeather}></img>
    } else if (mainWeather === "Snow"){
      return <img className="conditionIcon1" src={Snow} alt={mainWeather}></img>
    } else if (mainWeather === "Thunderstorm"){
      return <img className="conditionIcon1" src={Thunder} alt={mainWeather}></img>
    } 
  }
  return (
    <div>
      <a href="http://localhost:3000/">{intoIcon(currentObj.weather[0].main)}</a>
      <p id="condition">{currentObj.weather[0].description}</p>
      <p id="cityName">{city}</p>
      <div id="currentForecast">
        <p>Today</p>
        <p id="fullDateAndDay">{fullDate}</p>
        <div>
          <p>Current temp: {currentObj.temp}</p>
          <p>Feels like: {currentObj.feels_like}</p>
        </div>
        
      </div>
      <div id="dailyForecasts">
        {weeklyObj.map((day, index) => <DailyForecast key={index} high={day.temp.max} low={day.temp.min} day={day.temp.day} night={day.temp.night} weather={day.weather[0]} date={day.dt}/>)}
      </div>
      {console.log(currentObj)}
    </div>
    
  );
}

export default WeeklyForecast;
