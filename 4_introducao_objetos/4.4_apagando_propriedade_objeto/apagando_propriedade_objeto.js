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

console.log(joao);
delete joao.idade;
console.log(joao);

delete joao.end_joao.complemento;
console.log(joao);
