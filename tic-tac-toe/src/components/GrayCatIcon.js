import React from 'react'
import grayCat from '../graycat.png'
import './Icons.css'

export default function GrayCatIcon({klass}) {
  return (
    <>
      <img className={klass} src={grayCat} alt="cat" width="auto" height="75"/>
    </>
  )
}


