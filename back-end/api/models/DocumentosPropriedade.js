module.exports = {
  attributes: {
    casa_oracao: {
      model: 'CasaOracao',
      via: 'confrontacao'
    },
    tipo_imovel: {
      type: 'string',
      enum: [ 'Proprio', 'Alugado', 'Cedido' ]
    },
    zona_rural: {
      type: 'string',
      enum: [ 'sim', 'nao' ]
    },
    checklist: {
      type: 'string',
      enum: [ 'sim', 'nao']
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

