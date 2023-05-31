// Capturar o prompt do usuário
const prompt = require('prompt-sync')();

// const nome = prompt('');
// console.log(`Oi 👋 ${nome}`);

// IF e ELSE com numeros 
let numero1 = 50;
let numero2 = 70;

// let expressao = numero1 > numero2
// console.log('Tipo da variável: ', typeof expressao);
// console.log('Expressão: ', expressao);

// if (expressao) {
//     console.log('O número 1 é maior que o número 2');
// } else {
//     console.log('O número 2 é maior que o número 1');
// }

// IF e ELSE com strings

let nome1 = 'João';
let nome2 = 'João';

let expressao2 = nome1 == nome2;

console.log('Tipo da variável: ', typeof expressao2);
console.log('Expressão: ', expressao2);

if (expressao2) {
    console.log('Os nomes são iguais');
} else {
    console.log('Os nomes são diferentes');
}