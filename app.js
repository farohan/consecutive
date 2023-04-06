//Consecutive Numbers Sum Formula

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

//Consecutive Squares Sum Formula

const answer2 = document.querySelector('#answer2');

function summation(n) {
    return (n * (n + 1) / 2) * (2 * n + 1) / 3;
}

function altogether() {
    let target = Number(document.querySelector('#target').value);
    answer2.innerHTML = summation(target);
}

//Handling the form refresh event

document.querySelectorAll('.form').forEach(item => {
    item.addEventListener('submit', event => {
        event.preventDefault();
    })
})
