module.exports = {
  attributes: {
    codigo: {
      type: 'string'
    },
    cidade: {
      model: 'Cidade',
      via: 'terrenos'
    },
    nome: {
      type: 'string'
    },
    zona_urbana: {
      type: 'string',
      enum: [ 'sim', 'nao']
    },
    unificacao: {
      type: 'string',
      enum: [ 'sim', 'nao']
    },
    registro: {
      type: 'string',
      enum: [ 'sim', 'nao']
    },
    impedimentos: {
      type: 'string'
    }
  }
};

