const numbers = document.querySelector(".numbers");
const button = document.querySelector("button");
const numbersToDisplay = [];
const numbersArray = [1, 2, 3, 4, 5];

let lastNumber;
function randomNumber(arrOfNumbers) {
  const randomIndex = Math.floor(Math.random() * arrOfNumbers.length);
  const number = arrOfNumbers[randomIndex];
  if (number === lastNumber) {
    console.log("oop! last number");
    return randomNumber(arrOfNumbers);
  }
  lastNumber = number;
  return number;
}

// console.log(randomNumber(numbersArray));
button.addEventListener("click", handleClick);
function handleClick() {
  const h1 = document.createElement("h1");
  h1.innerHTML = randomNumber(numbersArray);
  numbers.appendChild(h1);
}

function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  }
  return number * factorial(number - 1);
}

function calculate(a, operator, b) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "/":
      return a / b;
    case "*":
      return a * b;
    case "power":
      return a ** b;
    case "mod":
      return a % b;
    default:
      return "specify an operator";
  }
}

const calculate = (action, ...values) => {
  switch (action) {
    case "sum":
      return values.reduce((previous, next) => previous + next);
    case "multiply":
      return values.reduce((previous, next) => previous * next);
  }
};
