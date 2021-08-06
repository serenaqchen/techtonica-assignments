
//get a random secret number between 0 and 100
let secretNum = Math.floor(Math.random() * 100);

//count number of wrong guesses
let wrongGuesses = 0;

//list of previous guesses
let prevGuesses = [];

//get input from user 
//going to have to use DOM methods to get input 
function checkNum(){
    //getting users guess
    let userGuess = document.getElementById("guessNum").value;
    //checking if guess is correct
    if (userGuess == secretNum){
        //add a notification that they got it correct 
        let notification = document.createElement('p')
        if (wrongGuesses === 0) {
            notification.innerHTML = `Congratulations! You guessed the secret number in ${wrongGuesses + 1} try!`
        } else {
            notification.innerHTML = `Congratulations! You guessed the secret number in ${wrongGuesses + 1} tries!`
        }
        document.getElementById('notification').appendChild(notification);
        //refreshes page 
        // document.querySelector("form").setAttribute("onSubmit", "return true");
    } else {
        wrongGuesses += 1;
        prevGuesses.push(userGuess);
        let notification = document.createElement('p')
        notification.innerHTML = `Guess again!`;
        document.getElementById('notification').appendChild(notification);
    }
}

//add event listener for when user submits a guess
document.getElementById('submitButton').addEventListener('click', checkNum);