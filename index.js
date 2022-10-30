//DOM Elements
let display = document.querySelector("#display");
const numbers = document.getElementsByClassName("number");
const operators = document.getElementsByClassName("operator");
const controls = document.getElementsByClassName("controls");
const decimal = document.getElementById(".");

//Storage for Numbers and Operators for calculations
let numberStorage = null;
let operatorStorage = null;

//Functions

//Displays User Input On Screen
const userInput = () => display.textContent.split(',').join('');

const getNumber = () => {
  return parseFloat(userInput());
};

const setDisplay = (input) => {
  if (input.length === 7){
    display.style.fontSize = "3.7rem";
  } else if (input.length === 8){
    display.style.fontSize = "3.3rem";
  } else if (input.length === 9){
    display.style.fontSize = "3rem";
  } else {
    display.style.fontSize = "4.5rem";
  }
  if (input === "0") {
    controls[0].innerText = "AC";
  } else {
    controls[0].innerText = "C";
  }
  if (input[input.length - 1] === ".") {
    display.textContent += ".";
    return;
  }
  const [wholeNumber, decimal] = input.split(".");
  if (decimal) {
    display.textContent = parseFloat(wholeNumber).toLocaleString() + "." + decimal;
  } else {
    display.textContent = parseFloat(wholeNumber).toLocaleString();
  }
};


const numberSelect = (numStr) => {
  const displayString = userInput();
  if (displayString === "0") {
    setDisplay(numStr);
  } else {
    setDisplay(displayString + numStr);
  }
};

const calculateAndConvertToString = () => {
  // Performs operation against newNumber
  const currentNumber = getNumber();
  const numberStored = parseFloat(numberStorage);
  let newNumber;
  if (operatorStorage === "+") {
    newNumber = numberStored + currentNumber;
  } else if (operatorStorage === "-") {
    newNumber = numberStored - currentNumber;
  } else if (operatorStorage === "×") {
    newNumber = numberStored * currentNumber;
  } else if (operatorStorage === "÷") {
    if (currentNumber === 0){
      display.textContent="Haha"
      return;
    }
    newNumber = numberStored / currentNumber;
  }

  return newNumber.toString();
};


//Checks number and values in storage and
const operatorSelect = (operator) => {
  const currentNumber = getNumber();
  if (!numberStorage) { // If numberStorage empty will store the currentNumber and Operator
    numberStorage = currentNumber;
    operatorStorage = operator;
    setDisplay("0");
    return;
  }
  numberStorage = calculateAndConvertToString();
  operatorStorage = operator;
  setDisplay("0");
};

// Number Buttons - Event Listener
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", (event) => {
    numberSelect(event.target.id.toString());
  });
}

decimal.addEventListener("click", () => {
  const displayString = userInput();
  if (!displayString.includes(".")) {
    setDisplay(displayString + ".");
  }
});

// Controls Buttons - Event Listener
for (let i = 0; i < controls.length; i++) {
  controls[i].addEventListener("click", (event) => {
    if (event.target.id == "clear") {
      setDisplay("0");
      numberStorage = null;
      operatorStorage = null;
    } else if (event.target.id == "plus-or-minus") {
      const currentNumber = getNumber();
      const currentNumberStr = userInput();
      if (currentNumberStr === "-0") {
        setDisplay("0");
      } else if (currentNumber >= 0) {
        setDisplay("-" + currentNumber);
      } else {
        setDisplay(currentNumberStr.substring(1));
      }
    } else if (event.target.id == "percent") {
      const currentNumber = getNumber();
      const newNumber = currentNumber / 100;
      setDisplay(newNumber.toString());
      numberStorage = null;
      operatorStorage = null;
    }

  });
};

// Operator Buttons - Event Listener
for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", (event) => {
    if (event.target.textContent == "+") {
      operatorSelect("+");

    } else if (event.target.textContent == "−") {
      operatorSelect("-");

    } else if (event.target.textContent == "×") {
      operatorSelect("×");

    } else if (event.target.textContent == "÷") {
      operatorSelect("÷");

    } else if (event.target.textContent == "=") {
      if (numberStorage) { // Number in storage
        setDisplay(calculateAndConvertToString());
        let numberStorage = null;
        let operatorStorage = null;

      }

    }

  });
}