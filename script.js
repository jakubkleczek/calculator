const display = document.querySelector('.display');
const controlButtons = document.getElementsByTagName('button');
const allSymbols = ['+', '-', 'x', '÷', 'C', '='];

let firstValue = '';
let secondValue = '';
let symbol  = '';
let result = '';

const calculate = () => {
  firstValue = parseFloat(firstValue);
  secondValue = parseFloat(secondValue);

  if (symbol === '+') result = firstValue + secondValue;
  if (symbol === '-') result = firstValue - secondValue;
  if (symbol === 'x') result = firstValue * secondValue;
  if (symbol === '÷') result = firstValue / secondValue;


  display.innerText = result;
  firstValue = result;
  secondValue = '';
}

for (let button of controlButtons) {
    button.addEventListener('click', () => {
      const { innerText: btnValue } = button;
      const btnValueIsSymbol = allSymbols.includes(btnValue);
  
      if (!secondValue && btnValue === '=') return null
  
      if (btnValue === 'C') {
        firstValue = secondValue = symbol = ''
        return display.innerText = ''
      }
  
      if (firstValue && btnValueIsSymbol) {
        secondValue && calculate()
        symbol = btnValue
      } else if (!symbol) firstValue += btnValue

        else if (symbol) secondValue += btnValue
        
        if (btnValue !== '=') display.innerText += btnValue
    })
}

// function truncateString(str, num) {
//   if (str.length <= num) {
//     return str
//   }
//   return str.slice(0, num) + '...'
// }

// const truncate = (str, len) => {
//    if (str.length > len) {
//       if (len <= 3) {
//          return str.slice(0, len - 3) + "...";
//       }
//       else {
//          return str.slice(0, len) + "...";
//       };
//    }
//    else {
//       return str;
//    };
// };






// const result = document.querySelector('.result')
// const buttons = document.querySelectorAll('button')

// let calculation = []
// let accumulativeCalculation

// function calculate(button) {
//     const value = button.textContent
//     if (value == "C") {
//         calculation = []
//         result.textContent = '.'
//     } else if (value === "=") {
//         result.textContent = eval(accumulativeCalculation)
//     } else {
//         calculation.push(value)
//         accumulativeCalculation =  calculation.join('')
//         result.textContent = accumulativeCalculation
//     }

    
// };

// buttons.forEach(button => button.addEventListener('click', () => calculate(button)))





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