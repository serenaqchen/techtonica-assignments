import React from 'react';
import './WeatherForcast.css';

function WeatherForcast({city}) {
  return (
    <div>
      <p>{city}</p>
    </div>
  )
}

export default WeatherForcast;
