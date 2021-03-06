'use strict';

let calculator = document.getElementsByClassName('calculator')[0];
let output = document.getElementsByClassName('output')[0];
let allowedSymbols = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '÷', '×', '.'];

calculator.onclick = (event) => {
  try {
    let target = event.target;
    let content = target.innerHTML;

    if (output.value === 'Wrong input') {
      output.value = '';
    }

    if (allowedSymbols.includes(content)) {
      output.value += content;
    }

    if (content === 'C') {
      output.value = '';
    }

    if (content === '=') {
      let expr = output.value;
      expr = expr.replaceAll('×', '*');
      expr = expr.replaceAll('÷', '/');
      output.value = Number(parseFloat(eval(expr)).toPrecision(12));
    }

  } catch (error) {
    output.value = 'Wrong input';
  }
};