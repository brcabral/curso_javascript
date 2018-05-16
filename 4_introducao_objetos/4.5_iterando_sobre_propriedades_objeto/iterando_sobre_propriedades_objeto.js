var endereco = {
  logradouro: 'Avenida Brasil',
  numero: 100,
  complemento: 'Apto 202',
  cidade: 'Rio de Janeiro',
  estado: 'RJ'
}

var joao = {
  nome: 'João',
  idade: 25,
  end_joao: endereco
}

for (var pessoa in joao) {
  console.log(pessoa, '->', joao[pessoa]);

  if (pessoa === 'idade') {
    console.log('Achei idade!');
  }
}
