const defaultNumber = 0;
let currentNumber = defaultNumber;
let logEntries = [];

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
    const logEntry = {
        operation:'ADD',
        prevResult: initialResult,
        number: enteredNumber,
        result: currentNumber
    };
    logEntries.push(logEntry);
    console.log(logEntry.operation);
    console.log(logEntries);
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
