const defaultNumber = 0;
let currentNumber = defaultNumber;

//getsinput from input field
function getUserNumberInput(){
    return parseInt(userInput.value);
}

//generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, CalcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${CalcNumber}`;
    outputResult(currentNumber, calcDescription); //from vendor.js file
}

function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentNumber;
    currentNumber = currentNumber + enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber);
}

function subtract(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentNumber;
    currentNumber = currentNumber - enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
}

function multiply(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentNumber;
    currentNumber = currentNumber * enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
}

function divide(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentNumber;
    currentNumber = currentNumber / enteredNumber;
    createAndWriteOutput('/',initialResult, enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
