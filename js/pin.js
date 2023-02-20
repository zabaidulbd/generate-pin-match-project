function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return generatePin();
    }
}

function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('btn-generate').addEventListener('click', function () {
    const pin = getPin();
    const generateInput = document.getElementById('generate-input-field');
    generateInput.value = pin;
})

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typedNumber = document.getElementById('calculator-input');
    const typedNumberString = typedNumber.value;
    if (isNaN(number)) {
        if (number == 'C') {
            typedNumber.value = '';
        }
        else if (number == '<') {
            const numberTyped = typedNumberString.split('');
            numberTyped.pop();
            const remainingDigits = numberTyped.join('');
            typedNumber.value = remainingDigits;
        }
    }
    else {
        const typeNumberTotal = typedNumberString + number;
        typedNumber.value = typeNumberTotal;

    }
})
document.getElementById('btn-submit').addEventListener('click', function () {
    const generateField = document.getElementById('generate-input-field');
    const generateFieldValue = generateField.value;
    const calculatorField = document.getElementById('calculator-input');
    const calculatorFieldValue = calculatorField.value;
    const notifySuccess = document.getElementById('notify-success');
    const notifyFail = document.getElementById('notify-fail');

    if (generateFieldValue == calculatorFieldValue) {
        notifySuccess.style.display = 'block';
        notifyFail.style.display = 'none';
    }
    else {
        notifyFail.style.display = 'block';
        notifySuccess.style.display = 'none';
    }
})
