import React from "react";
import { useState, useEffect } from "react";
import WeeklyForecast from "./WeeklyForecast.js";
import "./Homepage.css";
import weatherIcon from "../icons/weatherIcon2.png"

function Homepage() {
  const [city, setCity] = useState("");
  const [responseObj, setResponseObj] = useState({})
  const [status, setStatus] = useState(false)

  useEffect(() => {
    // Get the input field
  let input = document.getElementById("city");

  // Execute a function when the user releases a key on the keyboard
  input.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // update city as input value
      setCity(event.target.value);
      //hide input when city is searched
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&appid=3790000e9ffbfb9c3d2ee1ecb02cc70f`)
      .then((res) => res.json())
      .then(data => {
        setCity(data.name)
        if (data.cod !== 200) {
          let input = document.getElementById("city");
          input.value = ''
          input.placeholder = "Invalid city name. Try again."
        } else {
          return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=minutely,hourly&units=imperial&appid=3790000e9ffbfb9c3d2ee1ecb02cc70f`)
          .then((res) => res.json())
          .then((dailyData) => {
          setResponseObj(dailyData)
          setStatus(true)
          input.className = "disappear"
      })
        }
      })
    }
  });
  }, [])

  return (
    <div className="homepage">
      <main>
        {status ? <h1 className="disappear" id="text">Weather Forecast</h1> : <h1 id="text">Weather Forecast</h1>}
        {status ? <a href="http://localhost:3000/"><img className="disappear" id="logo" src={weatherIcon} alt="Weather Icon"/></a> : <a href="http://localhost:3000/"><img id="logo" src={weatherIcon} alt="Weather Icon"/></a>}
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <input
              id="city"
              className="form-control"
              name="city"
              placeholder="Press Enter to Search City"
            />
          </div>
        </form>
        {status && <WeeklyForecast city={city} weeklyObj={responseObj.daily.slice(1,6)} currentObj={responseObj.current}/> }
      </main>
    </div>
  );
}

export default Homepage;
