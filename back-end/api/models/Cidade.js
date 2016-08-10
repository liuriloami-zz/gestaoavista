var slug = require('slug');

module.exports = {
  attributes: {
    codigo: {
      type: 'string'
    },
    nome: {
      type: 'string'
    },
    slug: {
      type: 'string'
    },
    administracao: {
      model: 'Administracao',
      via: 'cidades'
    },
    casas_oracao: {
      collection: 'CasaOracao',
      via: 'cidade'
    },
    terrenos: {
      collection: 'Terreno',
      via: 'cidade'
    }
  },
  beforeCreate: function(cidade, callback) {
    cidade.slug = slug(cidade.nome);
    callback();
  },
  afterCreate: function(cidade, callback) {
    var meses = ['Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    meses.forEach(function(mes) {
      Coleta.create({
        cidade: cidade.id,
        mes: mes
      }).exec(function(err, coleta) {
        if (err) console.log(err);
      });
    });
    callback();
  }
};

