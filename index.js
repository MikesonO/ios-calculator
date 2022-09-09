//DOM Elements
let display = document.querySelector("#display");
const numbers = document.getElementsByClassName("number");
const operators = document.getElementsByClassName("operator");
const controls = document.getElementsByClassName("controls");
const decimal = document.getElementById(".");

//Functions

//Displays User Input On Screen
const userInput = () => display.textContent.split(',').join('');

const getNumber = () =>{
  return parseFloat(userInput());
}

const setDisplay = (input) =>{
  if (input === "0"){
    controls[0].innerText = "AC";
  } else {
    controls[0].innerText = "C";
  }
  if(input[input.length - 1] === "."){
    display.textContent += ".";
    return;
  }
  const [wholeNumber, decimal] = input.split(".");
  if (decimal){
    display.textContent = parseFloat(wholeNumber).toLocaleString() + "." + decimal;
  } else {
    display.textContent = parseFloat(wholeNumber).toLocaleString();
  }
}


const numberSelect = (numStr) =>{
  const displayString = userInput();
  if(displayString === "0"){
    setDisplay(numStr);
  } else {
    setDisplay(displayString + numStr);
}
};


// Number Buttons - Event Listener
for(let i =0; i < numbers.length; i++){
  const number = numbers[i];
  numbers[i].addEventListener("click",(event)=>{
    numberSelect(event.target.id.toString());
  })
} 

decimal.addEventListener("click",()=>{
  const displayString = userInput();
  if (!displayString.includes(".")){
    setDisplay(displayString + ".");
  }
})


// Controls Buttons - Event Listener
for (let i = 0; i < controls.length; i++) {
  controls[i].addEventListener("click", (event) => {
    if (event.target.id == "clear") {
      setDisplay("0");
    }

  });
}

