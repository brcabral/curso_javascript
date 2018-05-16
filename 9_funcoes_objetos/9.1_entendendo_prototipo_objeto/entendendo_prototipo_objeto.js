var volks = {
  fabricante: 'VW'
}

var fox = {
  nome: 'Fox',
  placa: 'AAA-1111',
}

// var gol = {
//   nome: 'Gol',
//   placa: 'AAA-2222',
// }

var gol = Object.create(volks);
gol.name = 'Gol';
gol.placa = 'AAA-2222';

console.log('Fox:', fox);
console.log('Gol:', gol);
console.log();

console.log(fox === gol);
console.log(Object.getPrototypeOf(fox) === Object.getPrototypeOf(gol));
console.log();

console.log('Fabricante do Fox:', fox.fabricante);
console.log('Fabricante do Gol:', gol.fabricante);

Object.setPrototypeOf(fox, volks);

console.log('Fabricante do Fox -->', fox.fabricante);
console.log('Fabricante do Gol -->', gol.fabricante);
console.log();

console.log('toString do Fox:', fox);
