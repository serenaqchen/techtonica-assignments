import React, {useState} from 'react';
import TriviaBoard from './componets/TriviaBoard'
import './App.css';
import EndGame from './componets/EndGame'
import StartGame from './componets/StartGame';

function App() {
  //keeps track of whether the game is over 
  const [endGame, setEndGame] = useState(false)
  //keeps track of final score
  const [finalScore, setFinalScore] = useState(0)

  const [startGame, setStartGame] = useState(false)

  //callback fxn to check if it is the end of the game 
  function checkEndGame (id, score,lastQ){
    if (id === 9 && lastQ){
      setEndGame(true)
      setFinalScore(score)
    }
  } 

  function restartGame(){
    setStartGame(false)
    setEndGame(false)
  }


  return (
    <div className="App">
      {!startGame ? <StartGame setStartGame={setStartGame}/> : (startGame && !endGame) ? <TriviaBoard checkEndGame={checkEndGame}/> : <EndGame restartGame={restartGame} finalScore={finalScore} />}
    </div>
  );
}

export default App;
