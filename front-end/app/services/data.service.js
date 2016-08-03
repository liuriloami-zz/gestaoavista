angular
    .module('app')
    .service('Data', DataService);

function DataService($http, Modal) {
    var data = this;

    data.administacoes = [];
    data.usuarios = [];
    data.cidades = [];
    data.terrenos = []; 
    data.casas_oracao = [];
    data.coletas = [];
    data.resumos = [];
    data.atualizacaoColetas = new Date();
    
    data.getAdministracoes = function() {
        return data.administracoes;
    };

    data.getUsuarios = function() {
        return data.usuarios;
    };

    data.getCidades = function() {
        return data.cidades;
    };

    data.getTerrenos = function() {
        return data.terrenos;
    };

    data.getCasasOracao = function() {
        return data.casas_oracao;
    };
    
    data.getColetas = function(cidade_slug) {
        if (!cidade_slug) return [];
        
        var cidade = data.cidades.filter(function(cidade) {
            return cidade.slug == cidade_slug;
        });
        if (cidade.length == 0) return [];

        return {
            cidade: cidade[0].nome,
            coletas: cidade[0].coletas
        };
    };
    
    data.getResumoColetas = function() {
        var meses = ['Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        var resumo = [];
        
        meses.forEach(function(mes) {
            var resumoMes = {
                mes: mes,
                cidade: 0,
                construcao: 0,
                piedade: 0,
                viagens: 0,
                manutencao: 0,
                assembleia: 0,
                especial_brasil: 0,
                especial_terreno: 0,
                especial_reg_amparo: 0,
                especial_ag_lindoia: 0,
                total: 0
            };
            data.cidades.forEach(function(cidade) {
                cidade.coletas.forEach(function(coleta) {
                    if (resumoMes.mes == coleta.mes)
                        for (var tipo in coleta)
                            if (tipo != 'mes')
                                resumoMes[tipo] += coleta[tipo];
                });
            });
            resumo.push(resumoMes);
        });
        return resumo;
    };

    data.getResumos = function() {
        data.resumos.length = 0;
        data.administracoes.forEach(function(administracao) {
            var item = {};
            
            item.administracao = administracao.nome;
            
            var cidades = data.cidades.filter(function(cidade) {
                return cidade.administracao && cidade.administracao.id == administracao.id;
            });
            if (cidades.length == 0) return;
            
            var casas_oracao = [];
            var terrenos = [];
            cidades.forEach(function(cidade) {
                data.casas_oracao.forEach(function(casa_oracao) {
                    if (casa_oracao.cidade.id == cidade.id)
                        casas_oracao.push(casa_oracao);
                });
                data.terrenos.forEach(function(terreno) {
                    if (terreno.cidade.id == cidade.id)
                        terrenos.push(terreno);
                });
            });
            if (casas_oracao.length == 0) return;
            
            var nCasasOracao = casas_oracao.length;

            var nChecklist = casas_oracao.filter(function(casa_oracao) {
                return casa_oracao.documentos_propriedade && casa_oracao.documentos_propriedade.checklist == 'sim';
            }).length;

            var nAverbadaParcialmente = casas_oracao.filter(function(casa_oracao) {
                return casa_oracao.documentos_propriedade && casa_oracao.documentos_propriedade.averbada_parcela == 'Parcial';
            }).length;

            var nNaoAverbada = casas_oracao.filter(function(casa_oracao) {
                return casa_oracao.documentos_propriedade && casa_oracao.documentos_propriedade.averbada == 'nao';
            }).length;

            var nEscritura = casas_oracao.filter(function(casa_oracao) {
                return casa_oracao.documentos_propriedade && casa_oracao.documentos_propriedade.escritura == 'sim';
            }).length;

            var nBaixadaReceita = casas_oracao.filter(function(casa_oracao) {
                return casa_oracao.documentos_propriedade && casa_oracao.documentos_propriedade.baixada_receita == 'sim';
            }).length;

            var nHabitese = casas_oracao.filter(function(casa_oracao) {
                return casa_oracao.documentos_propriedade && casa_oracao.documentos_propriedade.habite_se == 'sim';
            }).length;

            var nAlvara = casas_oracao.filter(function(casa_oracao) {
                return casa_oracao.geral && casa_oracao.geral.alvara == 'sim';
            }).length;

            var nAVCB = casas_oracao.filter(function(casa_oracao) {
                return casa_oracao.geral && casa_oracao.geral.avcb == 'sim';
            }).length;

            var nProjetoArquitetonico = casas_oracao.filter(function(casa_oracao) {
                return casa_oracao.projetos && casa_oracao.projetos.arquitetonico == 'sim';
            }).length;

            item.lista = [
                { 
                    nome: 'Quantidade de construções', 
                    valor: nCasasOracao, 
                    porcentagem: '100'
                },
                { 
                    nome: 'Quantidade de igrejas em Zona Rural',
                    valor: 0,
                    porcentagem: '0'
                },
                { 
                    nome: 'Checklist',
                    valor: nChecklist,
                    porcentagem: (100*nChecklist) / nCasasOracao
                },
                {
                    nome: 'Averbada parcialmente',
                    valor: nAverbadaParcialmente,
                    porcentagem: (100*nAverbadaParcialmente) / nCasasOracao
                },
                {
                    nome: 'Não averbada',
                    valor: nNaoAverbada,
                    porcentagem: (100*nNaoAverbada) / nCasasOracao
                },
                {
                    nome: 'Escritura',
                    valor: nEscritura,
                    porcentagem: (100*nEscritura) / nCasasOracao
                },
                {
                    nome: 'Obra baixada na Receita Federal',
                    valor: nBaixadaReceita,
                    porcentagem: (100*nBaixadaReceita) / nCasasOracao
                },
                {
                    nome: 'Habite-se',
                    valor: nHabitese,
                    porcentagem: (100*nHabitese) / nCasasOracao
                },
                {
                    nome: 'Alvará de Funcionamento Vigente',
                    valor: nAlvara,
                    porcentagem: (100*nAlvara) / nCasasOracao
                },
                {
                    nome: 'AVCB Vigente',
                    valor: nAVCB,
                    porcentagem: (100*nAVCB) / nCasasOracao
                },
                {
                    nome: 'Projeto Arquitetônico',
                    valor: nProjetoArquitetonico,
                    porcentagem: (100*nProjetoArquitetonico) / nCasasOracao
                }
            ];
            data.resumos.push(item);
        });
        return data.resumos;
    }
    
    data.atualizarAdministracoes = function() {
        $http.get('http://localhost:3003/administracao', {})
        .success(function(res, status) {
            data.administracoes = res;
            Modal.closeAll();
        });
    };
    
    data.atualizarUsuarios = function() {
        $http.get('http://localhost:3003/usuario', {})
        .success(function(res, status) {
            data.usuarios = res;
            Modal.closeAll();
        });
    };

    data.atualizarCidades = function() {
        $http.get('http://localhost:3003/cidade', {})
        .success(function(res, status) {
            data.cidades = res;
            Modal.closeAll();
        });
    };

    data.atualizarTerrenos = function() {   
        $http.get('http://localhost:3003/terreno', {})
        .success(function(res, status) {
            data.terrenos = res;
            Modal.closeAll();
        });
    };

    data.atualizarCasasOracao = function() {
        $http.get('http://localhost:3003/casaoracao', {})
        .success(function(res, status) {
            data.casas_oracao = res;
            Modal.closeAll();
        });
    };

    data.atualizarAdministracoes();
    data.atualizarUsuarios();
    data.atualizarCidades();
    data.atualizarTerrenos();
    data.atualizarCasasOracao();

}
