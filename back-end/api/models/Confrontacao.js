module.exports = {
  attributes: {
    casa_oracao: {
      model: 'CasaOracao',
      via: 'confrontacao'
    },
    realizada: {
      type: 'string',
      enum: [ 'sim', 'nao']
    },
    concordancia: {
      type: 'string',
      enum: [ 'sim', 'nao']
    },
    metragem: {
      type: 'float',
      defaultsTo: 0
    }
  }
};

