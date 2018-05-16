var volks = {
  fabricante: 'VW'
}

var fox = {
  nome: 'Fox',
  placa: 'AAA-1111',
  fabricante: 'GM'
}

console.log('Fabricante do Fox:', fox.fabricante);
Object.setPrototypeOf(fox, volks);
console.log('Fabricante do Fox:', fox.fabricante);  //GM

console.log();
console.log('toString do Fox:', fox);

delete fox.fabricante;
console.log('Fabricante do Fox -->', fox.fabricante);  //VW
console.log('toString do Fox-->', fox);
console.log();

for(var propriedade in fox) {
	console.log(propriedade, '-' ,fox.hasOwnProperty(propriedade));
}
