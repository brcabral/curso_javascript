var Carro = function(nome, placa) {
  this.nome = nome;
  this.placa = placa;
  //this.fabricante = 'VW';
}

Carro.prototype.fabricante = 'VW';

var fox = new Carro('Fox', 'AAA-1111');
console.log('Fox:', fox);

var gol = new Carro('Gol', 'AAA-2222');
console.log('Gol:', gol);
console.log();

console.log('Fabricante do Fox:', fox.fabricante);
console.log('Fabricante do Gol:', gol.fabricante);
