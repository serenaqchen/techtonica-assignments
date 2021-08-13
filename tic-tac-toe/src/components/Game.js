import React, {useState} from 'react';
import calculateWinner from '../helpers';
import Board from './Board';
import './Game.css';
import GrayCatIcon from './GrayCatIcon';
import WhiteCatIcon from './WhiteCatIcon';
// import cuteCat from '../cuteCat.png'

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
    boardCopy[i] = xIsNext ? "Gray Cat" : "White Cat";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  }

  function renderMoves(){
    return <button className="restartButton" onClick={() => setBoard(Array(9).fill(null))}>Restart Game</button>
  }
  
  function displayPlayer(){
    if(winner){
      return(
        <div>
          <p>Congratulations!</p>
          {winner === 'Gray Cat' ? <GrayCatIcon klass="kitty"/> : <WhiteCatIcon klass="kitty"/>}
          <p>You are the winner!</p>
        </div>
      )
    } else {
      if(xIsNext){
        return (
          <div>
            <p>Next Kitty</p>
            <GrayCatIcon klass="kitty"/>
          </div>)
      } else{
          return (
          <div>
            <p>Next Kitty</p>
            <WhiteCatIcon klass="kitty"/>
          </div>
        )
      }
    }
  }

  return (
    <>
    <div className="title">
      {/* <img className="catimg" src={cuteCat} alt="Cat Paw" /> */}
      <h1>Tic-Tac-Paw</h1>
      {/* <img className="reversed catimg" src={cuteCat} alt="Cat Paw" /> */}
    </div>
    <Board squares={board} onClick={handleClick} />
    <div className="displayPlayer">
      {displayPlayer()}
      {renderMoves()}
    </div>
    </>
  )
}

export default Game;