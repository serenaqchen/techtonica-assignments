import React from 'react'
import { useState, useEffect } from 'react';
import Option from './Option';
import Question from './Question';
import './TriviaBoard.css'

function TriviaBoard({checkEndGame}) {

  //holds the data fetched from backend
  const [data, setData] = React.useState(null);
  //hold state of question id
  const [id, setid] = useState(0)
  //hold state of whether if it is the same question, if set to false and feedback message will not show for the next question
  const [showMsg, setShowMsg] = useState(false)
  //hold state of feedback message
  const [message, setMessage] = useState(" ")
  //keeps track of score
  const [score, setScore] = useState(0)
  //keeps track of last question 
  const [lastQ, setLastQ] = useState(false)
  //track whether to disable the buttons or not depending on when an answer is chosen 
  const [disable, setDisable] = useState(false)

  //fetching my data from my server
  useEffect(() => {
    fetch("/questions")
      .then((res) => res.json())
      .then((data) => setData(data));

  }, []);

  //use to check if it is the end of the game yet
  useEffect(() => {
    checkEndGame(id, score,lastQ)
  }, [checkEndGame, id, score, lastQ])

  //disabling the buttons when an answer is checked   
  useEffect(() => {
    if (disable){
      let options = document.getElementsByClassName("option");
      for (let button of options){
        button.setAttribute("disabled", "")
      }

    } else {
      let options = document.getElementsByClassName("option");
      for (let button of options){
        button.removeAttribute("disabled")
      }
    }
  }, [disable])

  //fxn checks if the clicked option is correct
  function handleOptionClick (option, answer, correctMessages, wrongMessages){
    
    let buttons = document.getElementsByClassName('option');
    buttons = Array.from(buttons); //converting to array
    //looking for correct button 
    let correctButton = buttons.filter(button => button.innerText === answer);
    correctButton[0].classList.add("correctButton");

    //creates random number 
    let randomNum = Math.floor(Math.random() * (correctMessages.length  - 1))
    setDisable(true)
    setShowMsg(true)

    //if clicked answer is correct 
    if (option === answer){
      //set a correct message
      setMessage(correctMessages[randomNum])
      // setMessage(correctMessages[1])
      setScore(score+1)

    } else {
      setMessage(wrongMessages[randomNum])
    }

  }


  function handleNextButtonClick(){
    
    setShowMsg(false)
    setDisable(false)

    let buttons = document.getElementsByClassName('option');
    buttons = Array.from(buttons); //converting to array
    //looking for correct button 
    buttons.map(button => button.classList.remove("correctButton"))

    if (id === 9){
      setLastQ(true)
    } else {
      setid(id+1)
    }
  }

  //loads catches when data is null 
  if (data === null){
    return "Loading..."
  }

  return (
    <div className="Trivia">
      <div className="counterBar">
        <p className="Qcounter" ><strong>Question {id+1}/{data.length}</strong></p>
        <p>Score: {score} </p>  
      </div>

      {/* displays question */}
      <Question question={data[id].title}/>
      <br/>

      {/* displays options */}
      <div className="optionsContatiner">
        {data[id].choices.map((option, index) => <Option key={index} option={option} answer={data[id].correct} handleOptionClick={handleOptionClick} />)}
      </div>

      <br/>
      
      {/* diplay message when clicked */}
      <strong><p className="message" >{showMsg ? message : <></>}</p></strong>
      

      <br/>
      <br/>

      <button className="nextQ" onClick={() => handleNextButtonClick()}>Next Question</button>
      
    </div>
  );
}

export default TriviaBoard
