//get a random secret number between 0 and 100
let secretNum = Math.floor(Math.random() * 100);

//count number of wrong guesses
let wrongGuesses = 0;

//list of previous guesses
let prevGuesses = [];

//get input from user
//going to have to use DOM methods to get input
function checkNum() {
  //getting users guess
  let userGuess = document.getElementById("guessNum").value;
  //geting response object from DOM because need it to change later
  let response = document.getElementById("response");
  //creating a new response element to add to parent(response)
  let newResponse = document.createElement("p");
  //checking if guess is correct
  if (userGuess == secretNum) {
    if (wrongGuesses === 0) {
      //change the text in the created newResponse element 
      newResponse.innerHTML = `Congratulations! You guessed the secret number in ${
        wrongGuesses + 1
      } try!`;
      //replace the old response with a new one
      response.replaceChild(newResponse, response.firstElementChild);
      response.firstElementChild.setAttribute("class", "win");
    //if they get their answer in more than one tries
    } else {
      //change the text in the created newResponse element 
      newResponse.innerHTML = `Congratulations! You guessed the secret number in ${
        wrongGuesses + 1
      } tries!`;
      //replace the old response with a new one
      response.replaceChild(newResponse, response.firstElementChild);
      response.firstElementChild.setAttribute("class", "win");
    }
  } else {
    wrongGuesses += 1;
    prevGuesses.push(userGuess);
    let listOfResponses = [`Guess again`, `Give it another try`, `Negative, try again`, `Try again, don't give up`,
  `Don't worry, you'll get it next time. Try again`, 'Keep trying...', `You'll get it soon...`]
    newResponse.innerHTML = listOfResponses[Math.floor(Math.random()*listOfResponses.length)];
    response.replaceChild(newResponse, response.firstElementChild);
    if (userGuess < secretNum) {
      let greaterSection = document.getElementById("greaterList");
      let newNum = document.createElement("li");
      newNum.innerHTML = userGuess;
      greaterSection.appendChild(newNum);
      //clears input
      document.getElementById('guessNum').value = ''
    } else {
      let lessSection = document.getElementById("lessList");
      let newNum = document.createElement("li");
      newNum.innerHTML = userGuess;
      lessSection.appendChild(newNum);
      //clears input
      document.getElementById('guessNum').value = ''
    }
  }
}

//add event listener for when user submits a guess
document.getElementById("submitButton").addEventListener("click", checkNum);