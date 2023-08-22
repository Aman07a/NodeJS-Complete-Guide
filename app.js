"use strict";
const nume1Element = document.getElementById('num1');
const nume2Element = document.getElementById('num2');
const buttonElement = document.querySelector('button');
function add(num1, num2) {
    if (typeof num1 === 'number' && num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && num2 === 'string') {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}
buttonElement.addEventListener('click', () => {
    const num1 = nume1Element.value;
    const num2 = nume2Element.value;
    const result = add(+num1, +num2);
    const stringResult = add(num1, num2);
    console.log(result);
    console.log(stringResult);
});
