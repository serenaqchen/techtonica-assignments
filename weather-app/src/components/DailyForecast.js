import React from 'react'
import './DailyForecast.css'
import atmosphere from '../icons/atmosphere.svg'
import Clear from '../icons/Clear.svg'
import Clouds from '../icons/Clouds.svg'
import Drizzle from '../icons/Drizzle.svg'
import Rain from '../icons/Rain.svg'
import Snow from '../icons/Snow.svg'
import Thunder from '../icons/Thunder.svg'


function DailyForecast({high, low, day, night, weather, date }) {

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  let dt = new Date(date*1000)
  let dayOfWeek = dt.toLocaleDateString("en-US", {weekday: 'long'});
  let fullDate = dt.toLocaleDateString("en-US", options);

  function intoIcon (mainWeather) {
    let atm = ["Mist", "Smoke", "Haze", "Dust", "Fog", "Sand", "Dust", "Ash", "Squall", "Tornado"]

    if (atm.includes(mainWeather)){
      return <img className="conditionIcon" src={atmosphere} alt={mainWeather}></img>
    } else if (mainWeather === "Clear"){
      return <img className="conditionIcon" src={Clear} alt={mainWeather}></img>
    } else if (mainWeather === "Clouds"){
      return <img className="conditionIcon" src={Clouds} alt={mainWeather}></img>
    } else if (mainWeather === "Drizzle"){
      return <img className="conditionIcon" src={Drizzle} alt={mainWeather}></img>
    } else if (mainWeather === "Rain"){
      return <img className="conditionIcon" src={Rain} alt={mainWeather}></img>
    } else if (mainWeather === "Snow"){
      return <img className="conditionIcon" src={Snow} alt={mainWeather}></img>
    } else if (mainWeather === "Thunder"){
      return <img className="conditionIcon" src={Thunder} alt={mainWeather}></img>
    } 
  }

  return (
    <div id="day">
      {intoIcon(weather.main)}
      <p id="condition">{weather.description}</p>
      <strong><p id="dayOfWeek">{dayOfWeek}</p></strong>
      <p id="fullDate">{fullDate}</p>
      <div id="data">
        <ul className="info">
        <li><span>Day: {day} &deg;F</span></li>
        <li><span>Night: {night} &deg;F</span></li>
        <li><span>High: {high} &deg;F</span></li>
        <li><span>Low: {low} &deg;F</span></li>
        </ul>
      </div>
      
    </div>
  )
}

export default DailyForecast;

//need to display current temp, humidity, icon (weather.main), day of the week & date, min, max, day, night temp 