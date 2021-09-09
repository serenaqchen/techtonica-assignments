import './StartGame.css'

function StartGame({setStartGame}) {

    return (
      <div className="StartGame">
        <div className="header">
        <p className="play">Lets play!</p>
        </div>
        <div className="description">
          <p>Do you know your random facts?</p>
          <br/>
          <button className="startButton" onClick={() => setStartGame(true)}><strong>Start Game</strong></button>
        </div>
      </div>
    );
}

export default StartGame
