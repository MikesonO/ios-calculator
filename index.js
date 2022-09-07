//Add Function
const add = (num1,num2) => num1 + num2;

//Subtract Function
const subtract = (num1, num2) => num1 - num2;

//Multiply Function
const multiply = (num1, num2) => num1 * num2;

//Divide Funtion
const divide = (num1, num2) => num1 / num2;

const operate = (operator, num1, num2) => {
  if (operator == add){
    return add(num1, num2);
  } else if (operator == subtract){
    return subtract(num1, num2);
  } else if (operator == multiply){
    return multiply(num1, num2);
  } else if (operator == divide){
    return divide(num1, num2);
  }
}

