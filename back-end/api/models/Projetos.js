module.exports = {
  attributes: {
    casa_oracao: {
      model: 'CasaOracao',
      via: 'projetos'
    },
    arquitetonico: {
      type: 'string',
      enum: [ 'sim', 'nao']
    },
    estrutural: {
      type: 'string',
      enum: [ 'sim', 'nao']
    },
    eletrico: {
      type: 'string',
      enum: [ 'sim', 'nao']
    },
    hidraulico: {
      type: 'string',
      enum: [ 'sim', 'nao']
    },
    bancada: {
      type: 'string',
      enum: [ 'sim', 'nao']
    },
    som: {
      type: 'string',
      enum: [ 'sim', 'nao']
    },
    para_raios: {
      type: 'string',
      enum: [ 'sim', 'nao']
    }
  }
};

