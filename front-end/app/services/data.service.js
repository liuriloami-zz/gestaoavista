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
    
    data.getColetas = function(cidade_slug, casa_oracao_slug) {
        if (!cidade_slug) return [];
        
        var cidade = data.cidades.filter(function(cidade) {
            return cidade.slug == cidade_slug;
        });
        if (cidade.length == 0) return [];
        
        var casas_oracao = cidade[0].casas_oracao;
        if (casa_oracao_slug) 
            casas_oracao = casas_oracao.filter(function(casa_oracao) {
                return casa_oracao.slug == casa_oracao_slug;
            });

        var coletas = casas_oracao.map(function(casas_oracao) {
            return casas_oracao.coletas;
        });

        return coletas;
    };
    
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
