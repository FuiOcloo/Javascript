const defaultNumber = 0;
let currentNumber = defaultNumber;

function add(num1, num2) {
    const result = num1 + num2;
    return result;
}

currentNumber = add(2,2);


let calculationDescription = '(' + defaultNumber + '+ 10) * 3/ 2 -1';

outputResult(currentNumber, calculationDescription);
