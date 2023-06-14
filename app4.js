// let nota1 = 3;
// let nota2 = 6;

// let notaFinal = nota1 > nota2

// if (notaFinal) {
//     console.log('aprovado!');
// } else {
//     console.log('reprovado!');
// }

// const prompt = require('prompt-sync')();

// const nota1 = parseFloat(prompt('Digite o valor da Nota 1: '));
// const nota2 = parseFloat(prompt('Digite o valor da Nota 2: '));
// const nota3 = parseFloat(prompt('Digite o valor da Nota 3: '));

// let media = (nota1 + nota2 + nota3) / 3;

// if (media >= 7){
//     console.log(`Sua média é: ${media}.`)
//     console.log(`Você foi aprovado!`)
// } else {
//     console.log(`Sua média é: ${media}.`)
//     console.log(`Você foi reprovado!`)
// };

// const prompt = require('prompt-sync')();

// const nota1 = +prompt('Primeira nota: ');
// const nota2 = +prompt('Segunda nota: ');
// const nota3 = +prompt('Terceira nota: ');

// const media = (nota1 + nota2 + nota3) / 3;

// if (media >= 7) {
//     console.log('Aprovado!');
// } else {
//     console.log('Reprovado!');
// };

const prompt = require('prompt-sync')();

const nota1 = +prompt('Primeira nota: ');
const nota2 = +prompt('Segunda nota: ');
const nota3 = +prompt('Terceira nota: ');

const media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
    console.log('Aprovado!');
} else if (media >= 4) {
    console.log('AF!')
} else {
    console.log('Reprovado!');
};

