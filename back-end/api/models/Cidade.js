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
    coletas: {
      collection: 'Coleta',
      via: 'cidade'
    }
  }
};

