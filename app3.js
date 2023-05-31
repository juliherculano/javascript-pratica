// Fazer um programa que verifique se um numero é par ou impar

// Capturar o prompt do usuário
const prompt = require('prompt-sync')();

const entradaDoUsuario = prompt('Digite um número: ');

const restoDaDivisao = entradaDoUsuario % 2;

if (restoDaDivisao == 0) {
    console.log(`${entradaDoUsuario} é par`);
} else {
    console.log(`${entradaDoUsuario} é impar`);
}