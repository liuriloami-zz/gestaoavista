module.exports = {
  attributes: {
    codigo: {
      type: 'string'
    },
    cidade: {
      model: 'Cidade',
      via: 'coletas'
    },
    mes: {
      type: 'string'
    },
    construcao: {
      type: 'float',
      defaultsTo: 0
    },
    piedade: {
      type: 'float',
      defaultsTo: 0
    },
    viagens: {
      type: 'float',
      defaultsTo: 0
    },
    manutencao: {
      type: 'float',
      defaultsTo: 0
    },
    assembleia: {
      type: 'float',
      defaultsTo: 0
    },
    especial_brasil: {
      type: 'float',
      defaultsTo: 0
    },
    especial_terreno: {
      type: 'float',
      defaultsTo: 0
    },
    especial_reg_amparo: {
      type: 'float',
      defaultsTo: 0
    },
    especial_ag_lindoia: {
      type: 'float',
      defaultsTo: 0
    }
  }
};

