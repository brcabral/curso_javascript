var fox = {
  cor: 'prata',
  modelo: 'Fox',
  fabricante: 'VW'
}

console.log('Fox:', fox);
console.log(typeof fox);

console.log('Cor do carro:', fox.cor);
//Alterar o(s) valore(s) do objeto
fox.cor = 'Branco';
console.log('Cor do carro, depois de pintado:', fox.cor);
console.log();

//Outra forma de acessar o objeto
console.log('Modelo:', fox['modelo']);

fox.peso = 1100;
console.log(fox);
console.log('Potência:', fox.potencia);

fox.ligar = function() {
  console.log('Ligando o carro!');
}
console.log(fox);
fox.ligar();

var celta = {
  cor: 'preta',
  modelo: 'Celta',
  fabricante: 'GM',
  ligar : function() {
    console.log('Ligando o carro!');
  }
}

console.log(celta);
