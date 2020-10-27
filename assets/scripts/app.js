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

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult){
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentNumber;
    currentNumber = currentNumber + enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber);
    writeToLog('ADD', initialResult, enteredNumber, currentNumber);
}

function subtract(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentNumber;
    currentNumber = currentNumber - enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentNumber);
}

function multiply(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentNumber;
    currentNumber = currentNumber * enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentNumber);
}

function divide(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentNumber;
    currentNumber = currentNumber / enteredNumber;
    createAndWriteOutput('/',initialResult, enteredNumber);
    writeToLog('DIVIDE', initialResult, enteredNumber, currentNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
