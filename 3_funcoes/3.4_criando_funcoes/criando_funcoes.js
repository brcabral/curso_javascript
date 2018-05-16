// function declaration
//Pode ser declarada depois da chamada (hoisting funciona)
function somar(a, b) {
  //exibindo os parâmetros (argumentos) da função
  //console.log('Arguments: ', arguments);
  return a + b;
}

// function expression
//Não pode ser declarada depois da chamada (hoisting não funciona)
var subtrair = function(a, b) {
  return a - b;
}

//Não é obrigatório que uma funcção retorne alguma coisa.
function mensagem() {
  console.log('Função sem retorno');
}

var soma = somar(2, 3);
console.log('2 + 3 = ', soma);

var subtracao = subtrair(6, 2)
console.log('6 - 2 = ', subtracao);

//Uma função sem retorno, retorna undefined
console.log(mensagem());

//Em JS as funções tem um tipo
console.log('Type of subtrair:', typeof subtrair);
