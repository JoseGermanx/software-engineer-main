const prompt = require("prompt-sync")();

let number
number = prompt("Type a number: ")

function oddOrEven(input) {
  if (input % 2 == 0) {
    return "Even!"
  } else if (input % 2 == 1) {
    return "Odd!"
  } else {
    return "Not an Integer!"
  }
}

console.log(number + " is " + oddOrEven(number))
