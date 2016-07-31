module.exports = {
  attributes: {
    casa_oracao: {
      model: 'CasaOracao',
      via: 'geral'
    },
    habite_se: {
      type: 'string',
      enum: [ 'sim', 'nao']
    },
    alvara: {
      type: 'string',
      enum: [ 'sim', 'nao']
    },
    alvara_validade: {
      type: 'string'
    },
    avcb: {
      type: 'string',
      enum: [ 'sim', 'nao']
    },
    avcb_validade: {
      type: 'string'
    }
  }
};

