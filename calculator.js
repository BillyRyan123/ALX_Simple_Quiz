function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide (number1, number2) {
    return number1 /  number2;
}



const number1 = document.getElementById('Number1');

const number2 = document.getElementById('Number2');

const calculationResult = document.getElementById('calculation-result');

let value1;

let value2;

let result;

// event listener for addition 
const addButton = document.getElementById('add');

addButton.addEventListener('click', function (){
 value1= parseFloat(number1.value || 0);
 value2= parseFloat(number2.value || 0);
 result = add(value1, value2);
 calculationResult.textContent = result;
});



// event listener for multiplication
const multiplyButton  = document.getElementById('multiply');

multiplyButton.addEventListener('click', function (){
 value1= parseFloat(number1.value || 0);
 value2= parseFloat(number2.value || 0);
 result = multiply(value1, value2);
 calculationResult.textContent = result;
});


// event listener for division
const divideButton = document.getElementById('divide');

divideButton.addEventListener('click', function (){
 value1= parseFloat(number1.value || 0);
 value2= parseFloat(number2.value || 0);
 result = divide(value1, value2);
 calculationResult.textContent = result;
});

// event listener for subtract
const subtractButton = document.getElementById('subtract');
subtractButton.addEventListener('click', function (){
 value1= parseFloat(number1.value || 0);
 value2= parseFloat(number2.value || 0);
 result = subtract(value1, value2);
 calculationResult.textContent = result;
});




