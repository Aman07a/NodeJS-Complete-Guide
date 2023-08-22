const nume1Element = document.getElementById('num1') as HTMLInputElement;
const nume2Element = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button');

function add(num1: number, num2: number) {
  return num1 + num2;
}

buttonElement?.addEventListener('click', () => {
  const num1 = nume1Element.value;
  const num2 = nume2Element.value;
  const result = add(+num1, +num2);
  console.log(result);
});
