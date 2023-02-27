const result = document.querySelector('.result');
const buttons = document.querySelectorAll('button');

let calculation = [];
let accumulativeCalculation

function calculate(button) {
    const value = button.textContent;
    if (value == "C") {
        calculation = [];
        result.textContent = '';
    } else if (value === "=") {
        result.textContent = eval(accumulativeCalculation);
    } else {
        calculation.push(value);
        accumulativeCalculation =  calculation.join('');
        result.textContent = accumulativeCalculation;
    }

    
};

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))





// for(let i = 0; i <number.length; i++) {
//     number[i].addEventListener('click', (e) => {
//         let attribute = e.target.getAttribute('value');
//         if(isFirstValue === false) {
//             getFirstValue(attribute)
//         }
//         if(isSecondValue == false) {
//             getSecondValue(attribute);
//         }

//     })
// }

// function getFirstValue(element) {
//     result.innerHTML = "";
//     firstValue += element;
//     result.innerHTML = firstValue;
//     firstValue = +firstValue;
// }

// function getSecondValue(element) {
//     if(firstValue != "" && signs != "") {
//         secondValue += element;
//         result.innerHTML = secondValue;
//         secondValue = +secondValue;
//     }
// }

// function getSign() {
//     for(let i = 0; i < signs.length; i++) {
//         signs[i].addEventListener('click', (e) => {
//             signs = e.target.getAttribute('value');
//             isFirstValue = true;
//         })
//     }
// }

// getSign();

// equals.addEventListener('click', () => {
//     result.innerHTML = "";
//     if(sign === "/") {
//         resultValue = firstValue + secondValue;
//     } else if(sign === "-") {
//         resultValue = firstValue - secondValue;
//     } else if(sign === "x") {

//     }
// })