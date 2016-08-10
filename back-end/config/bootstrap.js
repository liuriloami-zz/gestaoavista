var randomHash = require('random-hashtag');

module.exports.bootstrap = function (cb) {

  var meses = [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio',
  'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  
  CasaOracao.find()
  .populate('coletas')
  .exec(function(err, casas_oracao) {
    
    casas_oracao.forEach(function(casa_oracao) {

      var existentes = [];
      casa_oracao.coletas.forEach(function(coleta) {
        var idx = _.indexOf(meses, coleta.mes);
        if (idx == -1) {
          Coleta.findOne({ id: coleta.id })
          .exec(function(err, coleta) {
            coleta.destroy();
          });
        } else 
          existentes.push(idx);
      });

      var todos = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
      var criar = _.difference(todos, existentes);
      criar.forEach(function(idx) {
        Coleta.create({
          casa_oracao: casa_oracao.id,
          mes: meses[idx]
        }).exec(function(err, coleta) {
        });
      });
    });
  });
  return cb();
};
