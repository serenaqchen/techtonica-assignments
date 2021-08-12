import React from 'react';
import Square from './Square'
import './Board.css';

//this component displays the board.
//it takes in two props, squares(all squares on the board in the form of an array with length of 9 (either null or "X"/"O" for its values)) and onClick(fxn that runs when clicked).
function Board({ squares, onClick }){
  return (
    //creating a wrapper element
    //taking the squares array and using map to create 9 Square components using the index as key
    //note that when maping and creating a component, every key has to be unique
    //Onclick is a function that runs the onClick function passed from props that takes in an integer/index as a parameter 
    //the value passed as a prop in the Square component is an element of the squares array 
    <div className="board"> 
      {squares.map((square, i) => (
			<Square key={i} value={square} onClick={() => onClick(i)} />
		))}
    
    </div>
  )
}

export default Board;