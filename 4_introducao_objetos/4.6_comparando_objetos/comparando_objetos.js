var joao = {
  nome: 'João',
  idade: 25,
  email: 'teste@email.com',
  //Em JS não tem função nativa de comparação de objetos,
  //nós precisamos fazer isso
  igualA: function(obj) {
    return this.email === obj.email;
  }
}

var maria = {
  nome: 'Maria',
  idade: 27,
  email: 'teste@email.com',
  igualA: function(obj) {
    return this.email === obj.email;
  }
}

console.log('João é igual a Maria:', joao === maria);
console.log('João e Maria tem o mesmo emails?', joao.igualA(maria));
