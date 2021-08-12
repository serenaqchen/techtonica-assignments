import React, {useState} from 'react';
import calculateWinner from '../helpers';
import Board from './Board';
import './Game.css';

//creating the game component that has hooks
function Game(){
  //creates a hook for managing the board when it is clicked
  //initializing it with an empty(null) 3x3 board
  //setBoard is a function that updates board
  const [board, setBoard] = useState(Array(9).fill(null));
  //create a hook for managing the next player. xIsNext is set to true this means that X is going 
  const [xIsNext, setXisNext] = useState(true);
  //winner returns the winner of the game by indexing sqaures or returns null if there are no winners
  const winner = calculateWinner(board);
  
  //this function runs when a square is clicked on the board 
  function handleClick(i){
    //making a copy of the current status of the board
    const boardCopy = [...board];
    // If user click an occupied square or if game is won, return
    if (winner || boardCopy[i]) return;
    // Put an X or an O in the clicked square
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  }

  function renderMoves(){
    return <button onClick={() => setBoard(Array(9).fill(null))}>Restart Game</button>
  }
  
  return (
    <>
    <Board squares={board} onClick={handleClick} />
    <div>
      <p>{winner ? `Winner: ${winner}` : `Next Player: ${xIsNext ? 'X' : 'O'}`}</p>
      {renderMoves()}
    </div>
    </>
  )
}

export default Game;