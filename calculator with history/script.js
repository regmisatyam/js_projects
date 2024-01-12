let calculationHistory = [];

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const expression = document.getElementById('display').value;

    try {
        const result = expression.includes('pi') ? eval(expression.replace('pi', Math.PI)) : eval(expression);
        const formattedResult = removeTrailingZeros(result);

        // Store the result in history
        calculationHistory.unshift({ expression, result: formattedResult });

        // Keep only the last 5 calculations in history
        calculationHistory = calculationHistory.slice(0, 5);

        // Update the display with the result
        document.getElementById('display').value = formattedResult;

        // Update the history display
        updateHistory();
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function removeTrailingZeros(number) {
    const formattedNumber = number.toString();
    return formattedNumber.includes('.') ? formattedNumber.replace(/\.?0+$/, '') : formattedNumber;
}

function updateHistory() {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = '';

    calculationHistory.forEach((calculation, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${index + 1}:</strong> ${calculation.expression} = ${calculation.result}`;
        historyList.appendChild(listItem);
    });
}

// Add event listeners for keyboard input
document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(event) {
    const key = event.key;

    if (key >= '0' && key <= '9') {
        appendToDisplay(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendToDisplay(key);
    } else if (key === '.' || key === ',') {
        appendToDisplay('.');
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        // Handle backspace
        const currentDisplay = document.getElementById('display');
        currentDisplay.value = currentDisplay.value.slice(0, -1);
    }
}
