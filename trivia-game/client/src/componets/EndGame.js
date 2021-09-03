import React from 'react'
import './EndGame.css'

function EndGame({restartGame, finalScore}) {
  return (
    <div className="endgame">
      <div className="endgameText">
        <p>You have reached the end of the game!</p>
        <p>Score: {finalScore}</p>
      </div>
      <button className="restartButton" onClick={() => restartGame()}>Restart Game</button>
    </div>
  )
}

export default EndGame
