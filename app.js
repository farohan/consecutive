const answer = document.querySelector('#answer');

function sumOfConsecutiveNumbers() {
    const firstNumber = document.querySelector('#first').value;
    const lastNumber = document.querySelector('#last').value;

    let totalIncrement = lastNumber - firstNumber;
    let multiplier = totalIncrement + 1;
    let startingNumber = firstNumber;

    const sum = multiplier*startingNumber + (totalIncrement*multiplier/2);
    answer.innerHTML = `Sum of ${firstNumber} to ${lastNumber}: <br><br> ${sum}`;
}

function formHandler(event) {
    event.preventDefault();
}

const form = document.querySelector('#form');
form.addEventListener('submit', formHandler);
