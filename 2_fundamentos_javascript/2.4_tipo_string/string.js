//Tipos strings podem ser declarados usando aspas simples ou duplas.
var x = 'Algaworks';
console.log(x);
console.log(typeof x);
console.log();

var y = "Algaworks";
console.log(y);
console.log(typeof y);
console.log();

//Propriedade para verificar a quantidade de caractere de uma string
console.log('Quantidade de caracteres: ', x.length);
console.log();

//Comparação de strings
//Apesar de resultar em verdadeiro ambas comparações, usar preferencialmente o ===
console.log(x == y);
console.log(x === y);
console.log();

//Contar o index (posição) de um determinado caractere
var m = 'Seja bem vindo a Algaworks';
console.log(m.indexOf('vindo'));

//Contar o index da última ocorrência do caractere
console.log(m.lastIndexOf('a'));

//Quando o caractere não tem ocorrência
console.log(m.lastIndexOf('z'));
console.log();

//Substring
var s = 'A arte de programar';
console.log(s.substring(2, 6));
console.log(s);  //Variáveis do tipo string são imutáveis
console.log(s.substring(2));  //Omitindo o segundo parâmetro, ele pega do ponto inicial até o final da string
console.log();

//Função slice, semelhante a substring, porém com ela podemos contar posições negativos.
console.log(s.slice(2, 6));
console.log(s.slice(-17, -13));
console.log();

//substr, parecido com o substring, porém o segundo parâmetro é a quantidade de caracteres desejado.
console.log(s.substr(2, 4));
console.log();


//replace - substituir trechos da string
var n = 'Seja bem vindo <nome>';
console.log(n.replace('<nome>', 'José'));
console.log();

//Alterar o case dos caracteres;
console.log(n.toUpperCase());
console.log(n.toLowerCase());
console.log();

//Concatenar strings
var g = 'Olá' + ' ' + 'Ricardo';
console.log(g);

var f = 'Olá'.concat(' ', 'Pedro', '!');
console.log(f);
console.log();

//Retornar o caractere em uma determinada posição
console.log(g.charAt(4));
