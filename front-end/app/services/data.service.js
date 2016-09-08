angular
    .module('app')
    .service('Data', DataService);

function DataService($http, Modal, $cookies) {
    var data = this;

    data.administacoes = [];
    data.usuarios = [];
    data.cidades = [];
    data.terrenos = []; 
    data.casas_oracao = [];
    data.coletas = [];
    data.resumos = [];
    data.atualizacaoColetas = new Date();
    data.usuario = null;

    data.getMeses = function() {
        var meses = [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio',
        'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        var agora = new Date();
        return meses.slice(0, agora.getMonth());
    };

    data.getUsuario = function() {
        var cookie = $cookies.get('usuario');
        if (data.usuario && !cookie)
            data.usuario = null;

        if (!data.usuario && cookie)
            data.usuario = JSON.parse(cookie);
        return data.usuario;
    };

    data.getAdministracoes = function() {
        if (!data.administracoes) return [];
        return data.administracoes.sort(function(a, b) {
            if (a.nome < b.nome) return -1;
            if (a.nome > b.nome) return 1;
            return 0;
        });
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
        var meses = data.getMeses();
        var resumo = [];
        var administracoes = data.getAdministracoes();
        var casas_oracao = data.getCasasOracao();
        administracoes.forEach(function(administracao) {
            var resumoTotal = {
                administracao: administracao.nome,
                mes: 'Total',
                cidade: 0,
                construcao: 0,
                piedade: 0,
                viagens: 0,
                manutencao: 0,
                despesas: 0,
                assembleia: 0,
                especial_brasil: 0,
                especial_terreno: 0,
                especial_reg_amparo: 0,
                especial_ag_lindoia: 0,
                total: 0
            };
            meses.forEach(function(mes) {
                var resumoMes = {
                    administracao: administracao.nome,
                    mes: mes,
                    cidade: 0,
                    construcao: 0,
                    piedade: 0,
                    viagens: 0,
                    manutencao: 0,
                    despesas: 0,
                    assembleia: 0,
                    especial_brasil: 0,
                    especial_terreno: 0,
                    especial_reg_amparo: 0,
                    especial_ag_lindoia: 0,
                    total: 0
                };
                casas_oracao.forEach(function(casa_oracao) {
                    if (casa_oracao.cidade.administracao != administracao.id) return;
                    casa_oracao.coletas.forEach(function(coleta) {
                        if (resumoMes.mes != coleta.mes) return;
                        for (var tipo in coleta)
                            if (tipo != 'mes') {
                              resumoMes[tipo] += coleta[tipo];
                              resumoTotal[tipo] += coleta[tipo];
                            }
                    });
                });
                resumo.push(resumoMes);
            });
            resumo.push(resumoTotal);
        });
        if (administracoes.length > 1) {
            var totalGeral = {
                administracao: 'Acumulado',
                mes: 'Total Geral',
                cidade: 0,
                construcao: 0,
                piedade: 0,
                viagens: 0,
                manutencao: 0,
                despesas: 0,
                assembleia: 0,
                especial_brasil: 0,
                especial_terreno: 0,
                especial_reg_amparo: 0,
                especial_ag_lindoia: 0,
                total: 0
            };
            meses.forEach(function(mes) {
                var resumoMes = {
                    administracao: 'Acumulado',
                    mes: mes,
                    cidade: 0,
                    construcao: 0,
                    piedade: 0,
                    viagens: 0,
                    manutencao: 0,
                    despesas: 0,
                    assembleia: 0,
                    especial_brasil: 0,
                    especial_terreno: 0,
                    especial_reg_amparo: 0,
                    especial_ag_lindoia: 0,
                    total: 0
                };
                casas_oracao.forEach(function(casa_oracao) {
                    casa_oracao.coletas.forEach(function(coleta) {
                        if (resumoMes.mes != coleta.mes) return;
                        for (var tipo in coleta)
                            if (tipo != 'mes') {
                                resumoMes[tipo] += coleta[tipo];
                                totalGeral[tipo] += coleta[tipo];
                            }
                    });
                });
                resumo.push(resumoMes);
            });
            resumo.push(totalGeral);
        }
        return resumo;
    };

    data.getResumos = function() {
        if (!data.administracoes) return [];
        var resumoFinal = {
            administracao: 'todas as administrações',
            lista: [
                { 
                    nome: 'Quantidade de construções', 
                    valor: 0, 
                    porcentagem: 0
                },
                { 
                    nome: 'Quantidade de igrejas em Zona Rural',
                    valor: 0,
                    porcentagem: 0
                },
                { 
                    nome: 'Checklist',
                    valor: 0,
                    porcentagem: 0
                },
                {
                    nome: 'Averbada parcialmente',
                    valor: 0,
                    porcentagem: 0
                },
                {
                    nome: 'Não averbada',
                    valor: 0,
                    porcentagem: 0
                },
                {
                    nome: 'Escritura',
                    valor: 0,
                    porcentagem: 0
                },
                {
                    nome: 'Obra baixada na Receita Federal',
                    valor: 0,
                    porcentagem: 0
                },
                {
                    nome: 'Habite-se',
                    valor: 0,
                    porcentagem: 0
                },
                {
                    nome: 'Alvará de Funcionamento Vigente',
                    valor: 0,
                    porcentagem: 0
                },
                {
                    nome: 'AVCB Vigente',
                    valor: 0,
                    porcentagem: 0
                },
                {
                    nome: 'Projeto Arquitetônico',
                    valor: 0,
                    porcentagem: 0
                }
            ]
        };
        
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
            resumoFinal.lista[0].valor += nCasasOracao;
            resumoFinal.lista[0].porcentagem += nCasasOracao;

            var nZonaRural = casas_oracao.filter(function(casa_oracao) {
                return casa_oracao.documentos_propriedade && casa_oracao.documentos_propriedade.zona_rural == 'sim';
            }).length;
            console.log(nZonaRural);
            resumoFinal.lista[1].valor += nZonaRural;
            resumoFinal.lista[1].porcentagem += nCasasOracao;

            var nChecklist = casas_oracao.filter(function(casa_oracao) {
                return casa_oracao.documentos_propriedade && casa_oracao.documentos_propriedade.checklist == 'sim';
            }).length;
            resumoFinal.lista[2].valor += nChecklist;
            resumoFinal.lista[2].porcentagem += nCasasOracao;

            var nAverbadaParcialmente = casas_oracao.filter(function(casa_oracao) {
                return casa_oracao.documentos_propriedade && casa_oracao.documentos_propriedade.averbacao_parcela == 'Parcial';
            }).length;
            resumoFinal.lista[3].valor += nAverbadaParcialmente;
            resumoFinal.lista[3].porcentagem += nCasasOracao;

            var nNaoAverbada = casas_oracao.filter(function(casa_oracao) {
                return casa_oracao.documentos_propriedade && casa_oracao.documentos_propriedade.averbacao == 'nao';
            }).length;
            resumoFinal.lista[4].valor += nNaoAverbada;
            resumoFinal.lista[4].porcentagem += nCasasOracao;

            var nEscritura = casas_oracao.filter(function(casa_oracao) {
                return casa_oracao.documentos_propriedade.tipo_imovel == 'Proprio' && casa_oracao.documentos_propriedade && casa_oracao.documentos_propriedade.escritura == 'sim';
            }).length;
            resumoFinal.lista[5].valor += nEscritura;
            resumoFinal.lista[5].porcentagem += casas_oracao.filter(function(casa_oracao) {
                return casa_oracao.documentos_propriedade.tipo_imovel == 'Proprio';
            }).length;

            var nBaixadaReceita = casas_oracao.filter(function(casa_oracao) {
                return casa_oracao.documentos_propriedade.tipo_imovel == 'Proprio' && casa_oracao.documentos_propriedade && casa_oracao.documentos_propriedade.baixada_receita == 'sim';
            }).length;
            resumoFinal.lista[6].valor += nBaixadaReceita;
            resumoFinal.lista[6].porcentagem += casas_oracao.filter(function(casa_oracao) {
                return casa_oracao.documentos_propriedade.tipo_imovel == 'Proprio';
            }).length;

            var nHabitese = casas_oracao.filter(function(casa_oracao) {
                return casa_oracao.geral && casa_oracao.geral.habite_se == 'sim';
            }).length;
            resumoFinal.lista[7].valor += nHabitese;
            resumoFinal.lista[7].porcentagem += nCasasOracao;

            var nAlvara = casas_oracao.filter(function(casa_oracao) {
                return casa_oracao.geral && casa_oracao.geral.alvara == 'sim';
            }).length;
            resumoFinal.lista[8].valor += nAlvara;
            resumoFinal.lista[8].porcentagem += nCasasOracao;

            var nAVCB = casas_oracao.filter(function(casa_oracao) {
                return casa_oracao.geral && casa_oracao.geral.avcb == 'sim';
            }).length;
            resumoFinal.lista[9].valor += nAVCB;
            resumoFinal.lista[9].porcentagem += nCasasOracao;

            var nProjetoArquitetonico = casas_oracao.filter(function(casa_oracao) {
                return casa_oracao.projetos && casa_oracao.projetos.arquitetonico == 'sim';
            }).length;
            resumoFinal.lista[10].valor += nProjetoArquitetonico;
            resumoFinal.lista[10].porcentagem += nCasasOracao;

            item.lista = [
                { 
                    nome: 'Quantidade de construções', 
                    valor: nCasasOracao, 
                    porcentagem: nCasasOracao
                },
                { 
                    nome: 'Quantidade de igrejas em Zona Rural',
                    valor: nZonaRural,
                    porcentagem: nCasasOracao
                },
                { 
                    nome: 'Checklist',
                    valor: nChecklist,
                    porcentagem: nCasasOracao
                },
                {
                    nome: 'Averbada parcialmente',
                    valor: nAverbadaParcialmente,
                    porcentagem: nCasasOracao
                },
                {
                    nome: 'Não averbada',
                    valor: nNaoAverbada,
                    porcentagem: nCasasOracao
                },
                {
                    nome: 'Escritura',
                    valor: nEscritura,
                    porcentagem: casas_oracao.filter(function(casa_oracao) {
                        return casa_oracao.documentos_propriedade.tipo_imovel == 'Proprio';
                    }).length
                },
                {
                    nome: 'Obra baixada na Receita Federal',
                    valor: nBaixadaReceita,
                    porcentagem: casas_oracao.filter(function(casa_oracao) {
                        return casa_oracao.documentos_propriedade.tipo_imovel == 'Proprio';
                    }).length
                },
                {
                    nome: 'Habite-se',
                    valor: nHabitese,
                    porcentagem: nCasasOracao
                },
                {
                    nome: 'Alvará de Funcionamento Vigente',
                    valor: nAlvara,
                    porcentagem: nCasasOracao
                },
                {
                    nome: 'AVCB Vigente',
                    valor: nAVCB,
                    porcentagem: nCasasOracao
                },
                {
                    nome: 'Projeto Arquitetônico',
                    valor: nProjetoArquitetonico,
                    porcentagem: nCasasOracao
                }
            ];
            item.lista.forEach(function(item) {
                if (item.porcentagem != 0)
                    item.porcentagem = Math.round((100*item.valor) / item.porcentagem * 100) / 100;
            });
            data.resumos.push(item);
        });

        resumoFinal.lista.forEach(function(item) {
            if (item.porcentagem != 0)
                item.porcentagem = Math.round((100*item.valor) / item.porcentagem * 100) / 100;
        });
        data.resumos.push(resumoFinal);

        return data.resumos;
    }
        
    data.atualizarAdministracoes = function() {
        $http.get('http://52.67.32.2:3003/administracao', {})
        .success(function(res, status) {
            data.administracoes = res;
            if (data.usuario && data.usuario.tipo == 'Comum')
                data.administracoes = data.administracoes.filter(function(administracao) {
                    return administracao.id == data.usuario.administracao.id;
                });
            Modal.closeAll();
        });
    };
    
    data.atualizarUsuarios = function() {
        $http.get('http://52.67.32.2:3003/usuario', {})
        .success(function(res, status) {
            data.usuarios = res;
            Modal.closeAll();
        });
    };

    data.atualizarCidades = function() {
        $http.get('http://52.67.32.2:3003/cidade', {})
        .success(function(res, status) {
            data.cidades = res;
            if (data.usuario && data.usuario.tipo == 'Comum')
                data.cidades = data.cidades.filter(function(cidade) {
                    return cidade.administracao.id == data.usuario.administracao.id;
                });
            Modal.closeAll();
        });
    };

    data.atualizarTerrenos = function() {   
        $http.get('http://52.67.32.2:3003/terreno', {})
        .success(function(res, status) {
            data.terrenos = res;
            if (data.usuario && data.usuario.tipo == 'Comum')
                data.terrenos = data.terrenos.filter(function(terreno) {
                    return terreno.cidade.administracao == data.usuario.administracao.id;
                });
            Modal.closeAll();
        });
    };

    data.atualizarCasasOracao = function() {
        $http.get('http://52.67.32.2:3003/casaoracao', {})
        .success(function(res, status) {
            data.casas_oracao = res;
            if (data.usuario && data.usuario.tipo == 'Comum')
                data.casas_oracao = data.casas_oracao.filter(function(casa_oracao) {
                    return casa_oracao.cidade.administracao == data.usuario.administracao.id;
                });
            Modal.closeAll();
        });
    };

    data.atualizarAdministracoes();
    data.atualizarUsuarios();
    data.atualizarCidades();
    data.atualizarTerrenos();
    data.atualizarCasasOracao();

}
