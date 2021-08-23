import React from 'react'
import WeatherForcast from './WeatherForcast';
import './Homepage.css'

function Homepage() {

  //this is a placeholder for when 
  let cityName = ""
  
  function city () { 
    const input = document.getElementById("city").value;

    if (typeof cityName === "string" && cityName.length != 0 ){
      return <WeatherForcast city={cityName} />
    }
  }

 return (
   <div className="homepage">
     <main>
       <h1>Weather Forcast</h1>
       <form action="http://localhost:3001/search" method="POST">
        <div className="form-group">
          <label id="cityLabel" for="city">Please enter city or zip code</label>
          <input id="city" className="form-control" name="city" placeholder="Search City or Zip Code"/>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
       {city()}
     </main>
   </div>
 );
}

export default Homepage
