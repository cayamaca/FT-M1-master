'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
     sum += +num[i] * 2 ** (num.length - 1 - i);
  }
  return sum;

  }
  

function DecimalABinario(num) {
  // tu codigo aca
  let contador = "";
  while (num > 0) {
    contador = num % 2 + contador;
    num = Math.floor(num /2);
  }
  return contador;
 
  
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}