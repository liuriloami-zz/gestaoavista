module.exports = {
  attributes: {
    casa_oracao: {
      model: 'CasaOracao',
      via: 'confrontacao'
    },
    situacao: {
      type: 'string',
      enum: [ 'Rural / Cedido', 'Rural / Proprio', 
      'Cedido', 'Proprio', 'Alugado' ]
    },
    escritura: {
      type: 'string',
      enum: [ 'sim', 'nao']
    },
    baixada_receita: {
      type: 'string',
      enum: [ 'sim', 'nao']
    },
    averbacao: {
      type: 'string',
      enum: [ 'sim', 'nao']
    },
    averbacao_parcela: {
      type: 'string',
      enum: [ 'Parcial', 'Total' ]
    },
    averbacao_impedimentos: {
      type: 'string'
    },
    cessao: {
      type: 'string'
    }
  }
};

