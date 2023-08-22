var nume1Element = document.getElementById('num1');
var nume2Element = document.getElementById('num2');
var buttonElement = document.querySelector('button');
function add(num1, num2) {
    return num1 + num2;
}
buttonElement.addEventListener('click', function () {
    var num1 = nume1Element.value;
    var num2 = nume2Element.value;
    var result = add(+num1, +num2);
    console.log(result);
});
