const resultInput = document.getElementById('result');
let shouldReset = false;

function appendNumber(number) {
    if (shouldReset) {
        resultInput.value = '';
        shouldReset = false;
    }
    resultInput.value += number;
}

function appendOperator(operator) {
    if (resultInput.value === '' && operator !== '-') return;
    resultInput.value += operator;
    shouldReset = false;
}

function calculateResult() {
    try {
        resultInput.value = eval(resultInput.value);
        shouldReset = true;
    } catch (error) {
        resultInput.value = 'Error';
        shouldReset = true;
    }
}

function clearResult() {
    resultInput.value = '';
}

function deleteLast() {
    resultInput.value = resultInput.value.slice(0, -1);
}
