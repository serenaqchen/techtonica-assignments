import React from 'react'
import whiteCat from '../whitecat.png'
import './Icons.css'

function WhiteCatIcon({klass}) {
  return (
    <>
      <img className={klass} src={whiteCat} alt="cat" width="auto" height="75"/>
    </>
  )
}

export default WhiteCatIcon