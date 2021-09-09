function Option({option, answer, handleOptionClick}) {
  
  let correctMessages = ["Correct!", "Nice Work! You got it right!", "Correctomundo!", "Congrats! You got it correct!", "You're so smart!"]

  let wrongMessages = ["Negative", "Sorry, inccorect", "Nice try, but wrong answer", "Nope, incorrect"]
  
  return (
    <div>
      <button className="option" onClick={() => handleOptionClick(option, answer, correctMessages, wrongMessages)}> 
      {option}
    </button>
    </div>
  )
}

export default Option
