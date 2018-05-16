var joao = {
  nome: 'João',
  idade: 25,
  endereco: {
    logradouro: 'Avenida Brasil',
    numero: 100,
    complemento: 'Apto 202',
    cidade: 'Rio de Janeiro',
    estado: 'RJ'
  }
}

console.log(joao);
console.log('Cidado que o João mora:', joao.endereco.cidade);
joao.endereco.numero = 101;
console.log(joao);
console.log('Estado:', joao['endereco']['estado']);
