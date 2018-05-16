$(function() {
  var atividade = $('#atividade');
  var listaAtividades = $('#lista-atividades');

  atividade.on('keyup', function(e) {
    var keyCode = e.keyCode;
    if (keyCode === 13) {
      atividade.trigger('addAtividadeLista', atividade.val());
      atividade.val('');
    }
  });

  atividade.on('addAtividadeLista', function(evento, texto) {
    listaAtividades.prepend('<li>' + atividade.val() + '</li>');
  });

});
