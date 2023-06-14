const prompt = require('prompt-sync')();

function converte() {
    if (unidade === 'Kelvin') {
      return (temperatura + 273.15) + ' K';
    } else if (unidade === 'Fahrenheit') {
      return ((temperatura * 9/5) + 32) + ' °F';
    } else {
      return "Unidade de temperatura inválida.";
    };
  };
 
let temperatura = parseFloat(prompt("Digite a temperatura em Celsius: "));
let unidade = prompt("Digite a unidade de temperatura: ");  

// let temperaturaKelvin = converte(temperatura, 'Kelvin');
// console.log(temperaturaKelvin + ' K');

// let temperaturaFahrenheit = converte(temperatura, 'Fahrenheit');
// console.log(temperaturaFahrenheit + ' °F');

let resultado = converte();
console.log(resultado);