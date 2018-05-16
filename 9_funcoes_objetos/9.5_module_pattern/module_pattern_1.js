var contador = (function() {
  var valor = 0;  //private

  return {
    incrementar : function() {
      valor++;
    },

    reset : function() {
      console.log('Valor do contador agora:', valor);
      valor = 0;
    }
  }
})();

contador.incrementar();
contador.incrementar();
contador.reset();


//rever a aula 3.6 - Closures
