//Variável global, pois está fora de uma função
//Evitar usar variáveis globais
var nome = 'AlgaWorks';

function capitalizar() {
  //nome é uma variável local da função capitalizar
  var nome = 'AlgaWorks'.toUpperCase();
}

capitalizar();
console.log('Nome:', nome);

function capitalizar2() {
  //Como não foi declarado uma variável local, será utilizado a variável global
  //Caso não tenha uma variável global "nome" declarada, essa se tornará uma variável global
  nome = 'AlgaWorks'.toUpperCase();
}

capitalizar2();
console.log('Nome 2:', nome);
