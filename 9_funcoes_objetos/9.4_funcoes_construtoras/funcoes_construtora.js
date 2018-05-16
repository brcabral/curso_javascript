var Carro = function(nome, placa, motor) {
  this.nome = nome;
  this.placa = placa;
  this.potencia = motor;
  this.fabricante = 'VW';
}

var fox = new Carro('Fox', 'AAA-1111', '1.0');
console.log(fox);
