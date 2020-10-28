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

function calculateResult(calculationType){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentNumber;
    let mathOperator;
    if (calculationType === 'ADD') {
        currentNumber = currentNumber + enteredNumber;
        mathOperator = '+';
    } else {
        currentNumber = currentNumber - enteredNumber;
        mathOperator = '-';
    }
    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentNumber);
}

function add() {
    calculateResult('ADD')
}
    

function subtract(){
    calculateResult('SUBTRACT')
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
