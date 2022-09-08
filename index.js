//Variables
let display = document.querySelector("#display");
const numbers = document.getElementsByClassName("number");
const operators = document.getElementsByClassName("operator");
const controls = document.getElementsByClassName("controls");

let currentValue = 0;
let currentInput = [];
let currentOperator = "";


//Displays Number
function displayNumber(num) {
  if (num == "0") { //Checks calculator is empty
    display.innerText = num;
    controls[0].innerText = "AC";
  } else {
    controls[0].innerText = "C"; //Changes AC text to C
    display.innerText = formatNumber(num);
  }
}

//Formats Number with commas
function formatNumber(num) {
  const MIN = 1;
  const MAX = 999999999;
  let number = Math.min(Math.max(Number(num), MIN), MAX);
  let formattedNumber = number.toLocaleString("en");
  return formattedNumber;
}

userInput = () => {
  return display.innerText;
}

removeComma = (num) => {
  return Number(num.replace(/,/g, ""));
}

//Number Buttons
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", (event) => {
    let input = removeComma(userInput());
    if (input != NaN) { //If output is a Number
      input = input + event.target.id; //Concatenates pressed
      displayNumber(input);
    }
  });
}

// Controls Buttons
for (let i = 0; i < controls.length; i++) {
  controls[i].addEventListener("click", (event) => {
    if (event.target.id == "clear") {
      displayNumber("0");
    }

  });
}

//Add Function
const add = (num1, num2) => num1 + num2;

//Subtract Function
const subtract = (num1, num2) => num1 - num2;

//Multiply Function
const multiply = (num1, num2) => num1 * num2;

//Divide Funtion
const divide = (num1, num2) => num1 / num2;

const operate = (operator, num1, num2) => {
  if (operator == add) {
    return add(num1, num2);
  } else if (operator == subtract) {
    return subtract(num1, num2);
  } else if (operator == multiply) {
    return multiply(num1, num2);
  } else if (operator == divide) {
    return divide(num1, num2);
  }
}