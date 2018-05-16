//Declarando o array
var emails = [];
//Atribuindo valores ao array
emails[0] = 'joao@email.com';
emails[1] = 'maria@email.com';

console.log('Email[0]:', emails[0]);
console.log('Email[5]:', emails[5]);

//Declarando e atribuindo valores ao array
var nomes = ['João', 'Maria'];
console.log('Quantos nomes tem o array nomes?', nomes.length);

nomes[4] = 'José';
//O array tem 5 posições, porém a posição 3 e 4 não tem valores
console.log('Quantos nomes antes de JOSÉ?', nomes.length);
