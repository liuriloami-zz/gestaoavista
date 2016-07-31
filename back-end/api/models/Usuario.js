module.exports = {
  attributes: {
    nome: {
      type: 'string'
    },
    email: {
      type: 'string'
    },
    tipo: {
      type: 'string',
      enum: [ 'Administrador', 'Comum' ]
    },
    administracao: {
      model: 'Administracao',
      via: 'usuarios'
    }
  }
};

