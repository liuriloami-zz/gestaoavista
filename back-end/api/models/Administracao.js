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
    cidades: {
      collection: 'Cidade',
      via: 'administracao'
    },
    usuarios: {
      collection: 'Usuario',
      via: 'administracao'
    }
  }
};

