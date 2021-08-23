import React from 'react'
import WeatherForcast from './WeatherForcast';
import './Homepage.css'

function Homepage() {

  //this is a placeholder for when 
  let cityName = ""
  
  function city (cityName) { 
    if (typeof cityName === "string" && cityName.length != 0 ){
      return <WeatherForcast city={cityName} />
    }
  }

 return (
   <div className="homepage">
     <main>
       <h1>Weather Forcast</h1>
       <form action="" method="post" class="form-1">
         <div class="form-1">
          <label id="cityLabel" for="city">Which city would you like to see the weather forcast for?</label>
          <input type="text" id="city"></input>
         </div>
       </form>
       {city(cityName)}
     </main>
   </div>
 );
}

export default Homepage
