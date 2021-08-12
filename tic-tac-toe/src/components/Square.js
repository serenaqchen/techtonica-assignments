import React from 'react';
import './Square.css';

//this component returns each individual square for the tic tac toe board
//takes in a value(what is shown in the box) and onClick(fxn, what happens when you click the square)
function Square({ value, onClick}){
  return (
    //want to return a button what runs the onClick function when clicked and displays the value that is passed from the prop
    <button className="square" onClick={onClick}>{value}</button>
  )
}

export default Square;