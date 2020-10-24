const defaultNumber = 0;
let currentNumber = defaultNumber;

function add() {
    currentNumber = currentNumber + parseInt(userInput.value);
    outputResult(currentNumber, '');
}

addBtn.addEventListener('click', add);
