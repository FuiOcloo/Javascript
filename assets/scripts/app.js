const defaultNumber = 0;
let currentNumber = defaultNumber;

function add(num1, num2) {
    const result = num1 + num2;
    alert("The result is " + result);
}

add(3,2);
add(5, 10);

currentNumber = (currentNumber + 10) * 3 / 2 - 1;

let calculationDescription = '(' + defaultNumber + '+ 10) * 3/ 2 -1';

outputResult(currentNumber, calculationDescription);
