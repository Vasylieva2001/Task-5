let button = document.getElementById('button');
let result = document.getElementById('result');

button.addEventListener('click', calc);

function calc() {
    result.innerHTML = (1 / 2) * d.value * d.value;
}