// function executaFuncao(funcao) {
//     funcao();
// };

// function x() {
//     console.log ('executa x');
// };

// executaFuncao(x);

/////////////// CALLBACK

// function soma (numero1, numero2) {
//     return numero1 + numero2;
// };

// function subtracao (numero1, numero2) {
//     return numero1 - numero2;
// };

// function multiplicacao (numero1, numero2) {
//     return numero1 * numero2;
// };

// function executaOperacao  (operacao, numero1, numero2) {
//     return operacao (numero1, numero2);
// };

// const resultado = executaOperacao(
//     function (numero1, numero2) { return numero1 * numero2 },
//     3,
//     4
// );
// // = const resultado = executaOperacao(multiplicacao, 3, 4);
// console.log(resultado)

///////////// ARROW FUNCTIONS

const soma = (n1, n2) => {
    return n1 + n2;
};
const subtracao = (n1, n2) => {
    return n1 - n2;
};

const multiplicacao = (n1, n2) => {
    return n1 * n2;
};

const divisao = (n1, n2) => {
    return n1 / n2;
};

const elevaAoQuadrado = numero => numero * numero

console.log ()