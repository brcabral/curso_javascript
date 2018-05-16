var contador = (function() {
  var valor = 0;  //private

  var incrementar = function() {
    valor++;
    funcaoPrivada();
  };

  var reset = function() {
    console.log('Valor do contador agora:', valor);
    valor = 0;
  }

  function funcaoPrivada() {
    console.log('Função privada..');
  }

  return {
    incrementar : incrementar,
    reset : reset
  }
}());

contador.incrementar();
contador.incrementar();
contador.reset();
