var menorNota = Math.min(3, 5, 1, 6, 10);
console.log('Menor nota:', menorNota);
console.log();

var maiorNota = Math.max(3, 5, 1, 6, 10);
console.log('Menor nota:', maiorNota);
console.log();

//Arredonda o número <= 4 para baixo, >=5 para cima
var temperatura = Math.round(22.7);
console.log('Temperatura:', temperatura);

var valorAleatorio = Math.random();
console.log('Valor aleatório:', valorAleatorio);
console.log();

//Gerar números da MegaSena
var numero = valorAleatorio * 60;
console.log('número:', numero);
//Arredonda o número para baixo
var numeroMega = Math.floor(numero) + 1;
console.log('Número da Mega:', numeroMega);
