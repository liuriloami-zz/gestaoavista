module.exports = {
  attributes: {
    codigo: {
      type: 'string'
    },
    cidade: {
      model: 'Cidade',
      via: 'casas_oracao'
    },
    nome: {
      type: 'string'
    },
    geral: {
      model: 'InformacoesGerais',
      via: 'casa_oracao'
    },
    confrontacao: {
      model: 'Confrontacao',
      via: 'casa_oracao'
    },
    documentos_propriedade: {
      model: 'DocumentosPropriedade',
      via: 'casa_oracao'
    },
    manutencao: {
      model: 'Manutencao',
      via: 'casa_oracao'
    },
    projetos: {
      model: 'Projetos',
      via: 'casa_oracao'
    }
  }
};

