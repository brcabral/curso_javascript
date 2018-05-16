var fox = ['Fox', 4, {som: 'Multilaser', banco: 'Pano'}, function() {}];
console.log(fox);
console.log();

var acessorios = {
  som: 'Pionner',
  banco: 'Couro'
}

var ligar = function(a) {
  console.log('Ligando o carro...', a);
}

var celta = ['Celta', 4, acessorios, ligar];
console.log(celta);
console.log();

console.log(celta[2].som);
console.log();

console.log(celta[3]('agora'));
