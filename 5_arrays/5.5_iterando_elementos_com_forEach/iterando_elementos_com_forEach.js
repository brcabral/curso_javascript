var nomes = ['João', 'Pedro', 'Maria', 'José'];

for (var i = 0; i < nomes.length; i++) {
  console.log('Nomes na posição ' + i + ':', nomes[i]);
}

nomes.forEach(function(elemento){
  console.log(elemento);
});
