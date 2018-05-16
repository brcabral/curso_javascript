console.log(10 > 4);
console.log(10 < 4);
console.log(10 > 10);
console.log(10 >= 10);
console.log(10 <= 10);
console.log();

console.log(10 == 10);
console.log('AlgaWorks' == 'AlgaWorks');
console.log('AlgaWorks' == 'Algaworks');  //case sensitive
console.log();

var x = 10;
var y = '10';
console.log(typeof x);
console.log(typeof y);
console.log(x == y);  //Com 2 iguais (==) o JS compara apenas o valor
console.log(x === y);  //com 3 iguais (===) o JS também compara o tipo da variável
console.log();

//O mesmo vale para diferença de valores
console.log(x != y);  //compara apenas o valor
console.log(x !== y);  //compara o valor e o tipo
