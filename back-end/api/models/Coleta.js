module.exports = {
  attributes: {
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
    },
    total: {
      type: 'float',
      defaultsTo: 0
    }
  },
  beforeCreate: function(coleta, callback) {
    coleta.total = coleta.construcao + coleta.piedade + coleta.viagens + 
    coleta.manutencao + coleta.assembleia + coleta.especial_brasil +
    coleta.especial_terreno + coleta.especial_reg_amparo + coleta.especial_ag_lindoia;
    callback();
  },
  beforeUpdate: function(coleta, callback) {
    coleta.total = coleta.construcao + coleta.piedade + coleta.viagens + 
    coleta.manutencao + coleta.assembleia + coleta.especial_brasil +
    coleta.especial_terreno + coleta.especial_reg_amparo + coleta.especial_ag_lindoia;
    callback();
  }
};

