module.exports = {
  attributes: {
    nome: {
      type: 'string'
    },
    email: {
      type: 'string'
    },
    senha: {
      type: 'string'
    },
    tipo: {
      type: 'string',
      enum: [ 'Administrador', 'Comum', 'Geral' ]
    },
    administracao: {
      model: 'Administracao',
      via: 'usuarios'
    }
  }
};

