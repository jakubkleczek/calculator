const number = document.querySelectorAll('.number');
const result = document.querySelector('.result');
const signs = document.querySelectorAll('.sign');
const clear = document.querySelector('.clear');
equals = document.querySelector('.equals');

let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let sign = "";
let resultValue = 0;

for(let i = 0; i <number.length; i++) {
    number[i].addEventListener('click', (event) => {
        let attribute = event.target.getAttribute('value');
        if(isFirstValue === false) {
            getFirstValue(attribute)
        }
        if(isSecondValue == false) {
            getSecondValue(attribute);
        }

    })
}

function getFirstValue(element) {
    result.innerHTML = "";
    firstValue += element;
    result.innerHTML = firstValue;
    firstValue = +firstValue;
}

function getSecondValue(element) {
    if(firstValue != "" && signs != "") {
        secondValue += element;
        result.innerHTML = secondValue;
        secondValue = +secondValue;
    }
}

function getSign() {
    for(let i = 0; i < signs.length; i++) {
        signs[i].addEventListener('click', (event) => {
            signs = event.target.getAttribute('value');
            isFirstValue = true;
        })
    }
}

getSign();

equals.addEventListener('click', () => {
    result.innerHTML = "";
    if(sign === "/") {
        resultValue = firstValue + secondValue;
    } else if(sign === "-") {
        resultValue = firstValue - secondValue;
    } else if(sign === "x") {

    }
})