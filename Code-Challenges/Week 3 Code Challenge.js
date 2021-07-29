// Write a function below that accepts a number as the only argument.
// The function should determine whether the number is divisible by 3,
// and return either true or false.
// Choose names that make the code easy to understand.
//
// Note:  None of the review # problems have tests included, but feel free to write your own.
function divisibleBy3(num){
    return num%3 === 0
}


//test cases
console.log(divisibleBy3(6)) // true
console.log(divisibleBy3(12)) // true
console.log(divisibleBy3(0)) // true
console.log(divisibleBy3(245)) // false

// Write a function that takes a string as the argument.
// The function should return a number that is the number of characters in the string.
// Choose names that make the code easy to understand.
// considering punctuations are characters and spaces are not
function numChar(string){
    if (typeof string !== "string"){
        return "input is not a string"
    } else {
        return string.split(" ").join("").length
    }
}

//test cases
console.log(numChar(52)) //input is not a string
console.log(numChar('hello there.')) //11 
console.log(numChar('hello')) //5

// 1. Create an array of numbers, (ex: [1, 2, 3])
// 2. Without using any math operators, write 5 statements:
//   - Return the first item in the array (ex: 1)
//   - Return the last item in the array (ex: 3)
//   - Add a new item to the end of the array (ex: [1,2,3,4])
//   - Add an array to the beginning of the array. (ex: [["a","b","c"],1,2,3,4])
//   - Return the first item from the first item in the array. (ex: "a")
let numberArr = [1,2,3,4,5];
console.log(numberArr.shift());
console.log(numberArr.pop());
console.log(numberArr.push(3));
console.log(numberArr.unshift([1,3,2,1]));
console.log(numberArr.shift().shift());

// Create a function that calculates how many minutes have elapsed from midnight until right now.
// The function should still return an accurate answer,
// even if you ran it a few minutes or hours later.

function elapsedMins(){
  let today = new Date();
  let hours = today.getHours();
  let mins = today.getMinutes();
  return (hours * 60) + mins
}
