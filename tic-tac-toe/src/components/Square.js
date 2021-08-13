import React from 'react';
import './Square.css';
import GrayCatIcon from './GrayCatIcon';
import WhiteCatIcon from './WhiteCatIcon';

//this component returns each individual square for the tic tac toe board
//takes in a value(what is shown in the box) and onClick(fxn, what happens when you click the square)
function Square({ value, onClick}){

  function whichCat(){
    if (value === 'Gray Cat'){
      return <GrayCatIcon klass="none"/>
    } else if (value === "White Cat") {
      return <WhiteCatIcon klass="none" />
    }
  }

  // function color(){
  //   if (value === 'Gray Cat'){
  //     return "blue"
  //   } else if (value === "White Cat") {
  //     return "green"
  //   }
  // }
  
  return (
    //want to return a button what runs the onClick function when clicked and displays the value that is passed from the prop
    <>
    <button className={`square`} onClick={onClick}>
      {whichCat()}
    </button>
    </>
  )
}

export default Square;