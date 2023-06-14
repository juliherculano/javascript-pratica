// function executaFuncao(funcao) {
//     funcao();
// };

// function x() {
//     console.log ('executa x');
// };

// executaFuncao(x);

/////////////// CALLBACK : garantem que uma função não seja executada antes que uma tarefa seja concluída, mas logo depois dessa tarefa ser concluída

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

///////////// ARROW FUNCTIONS : são um tipo de sintaxe utilizada para escrever funções de forma mais condensada

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

console.log(soma(4, 3));
console.log(subtracao(4, 3));
console.log(multiplicacao(4,3));
console.log(divisao(4,3));


//////// DEFAULT : Permite definir um valor pré-definido caso o parâmetro não seja preenchido ou receba o valor undefined

const dizerOi = (nome = 'indivíduo') => {
    return 'Oi, ' + nome;
};

console.log(dizerOi('Juliana'));
console.log(dizerOi());

///// Função dentro de uma função:

const x = () => {
    const y = () => {
        console.log('aaaaa');
    };
    return y
};

let a = x();
a();