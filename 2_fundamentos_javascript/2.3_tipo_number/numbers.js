var idade = 25;
console.log('Tipo da variável idade: ', typeof idade);
console.log();

var preco = 14.99;
console.log('Tipo da variável preco: ', typeof preco);
console.log();

//Evitar fazer contas com ponto flutuante em Javascript
var x = 0.3 - 0.2;
console.log(x);
console.log();

//Para resolver o caso acima
var x = (((0.3 * 10) - (0.2 * 10)) / 10);
console.log(x);
console.log();

//Funções nativas
//Converter para binário
var y = 10;
console.log(y.toString(2));
console.log();

//Converter para hexadecimal
console.log(y.toString(16));
console.log();

//Tipo number infinito
var i = 10 / 0;
console.log(i);
console.log(typeof i);
console.log();

var i = -10 / 0;
console.log(i);
console.log(typeof i);
console.log();

//Tipo não numérico
var z = 10 / 'a';
console.log(z);
console.log(typeof z);
console.log(isNaN(z));
console.log();

//Casting automático
t = 10 / '2';
console.log(t);
