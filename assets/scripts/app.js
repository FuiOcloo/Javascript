const defaultNumber = 0;
let currentNumber = defaultNumber;

function getUserNumberInput(){
    return parseInt(userInput.value);
}

function add() {
    const enteredNumber = getUserNumberInput();
    const calcDescription = `${currentNumber} + ${enteredNumber}`;
    currentNumber = currentNumber + enteredNumber;
    outputResult(currentNumber, calcDescription);
}

addBtn.addEventListener('click', add);
