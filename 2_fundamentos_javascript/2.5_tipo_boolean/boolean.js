var ativo = true;
console.log(typeof ativo);
ativo = false;
console.log(typeof ativo);
console.log();

//Em javascript 0 é falso.
if (0) {
  console.log('0 é true');
} else {
  console.log('0 é false');
}
console.log();

console.log(0);  //número zero
console.log(!0);  //true
console.log(!!3);  //true

//Todos os valores abaixo são falso
console.log(!!0);  //false
console.log(!!'');  //false
console.log(!!NaN);  //false
console.log(!!null);  //false
console.log(!!undefined);  //false
console.log(!!false);  //false
console.log();

//Não é preciso fazer o comparativo (==) da variável para verificar se o valor é null
var nome = '';
if (!nome) {
  console.log('Informe o nome.');
}
