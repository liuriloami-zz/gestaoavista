angular
    .module('app')
    .controller('ModalController', ModalController);

ModalController.$inject = ['$scope', 'Modal', 'Data', '$http'];

function ModalController($scope, Modal, Data, $http) {
    $scope.Data = Data;
    $scope.Modal = Modal;

    $scope.$watch('Modal.getData()', function(data) {
        $scope.data = data;
    }, true);

    $scope.$watch('Data.getCasasOracao()', function(casas_oracao) {
        $scope.casas_oracao = casas_oracao;
    }, true);

    $scope.$watch('Data.getCidades()', function(cidades) {
        $scope.cidades = cidades;
    }, true);

    $scope.$watch('Data.getAdministracoes()', function(administracoes) {
        $scope.administracoes = administracoes;
    }, true);

    $scope.salvarAdministracao = function() {
        if ($scope.data.id)
            $http.put('http://52.67.32.2:3003/administracao/' + $scope.data.id, $scope.data)
            .success(function(res, status) {
                Data.atualizarAdministracoes();
            });
        else
            $http.post('http://52.67.32.2:3003/administracao/', $scope.data)
            .success(function(res, status) {
                Data.atualizarAdministracoes();
            });
    };

    $scope.excluirAdministracao = function() {
        $http.delete('http://52.67.32.2:3003/administracao/' + $scope.data.id, {})
        .success(function(res, status) {
            Data.atualizarAdministracoes();
        });
    };

    $scope.confirmarExclusaoAdministracao = function() {
        Modal.open('administracao-exclusao', $scope.data);
    };

    $scope.salvarCidade = function() {
        if ($scope.data.id)
            $http.put('http://52.67.32.2:3003/cidade/' + $scope.data.id, $scope.data)
            .success(function(res, status) {
                Data.atualizarCidades();
                Data.atualizarAdministracoes();
            });
        else
            $http.post('http://52.67.32.2:3003/cidade/', $scope.data)
            .success(function(res, status) {
                Data.atualizarCidades();
                Data.atualizarAdministracoes();
            });
    }

    $scope.excluirCidade = function() {
        $http.delete('http://52.67.32.2:3003/cidade/' + $scope.data.id, {})
        .success(function(res, status) {
            Data.atualizarCidades();
            Data.atualizarAdministracoes();
        });
    };

    $scope.confirmarExclusaoCidade = function() {
        Modal.open('cidade-exclusao', $scope.data);
    };

    $scope.salvarColetas = function() {
        $http.put('http://52.67.32.2:3003/coleta/' + $scope.data.id, $scope.data)
        .success(function(res, status) {
            Data.atualizarCidades();
            Data.atualizacaoColetas = new Date();
        });
    };

    $scope.salvarCasaOracao = function() {
        if ($scope.data.id)
            $http.put('http://52.67.32.2:3003/casaoracao/' + $scope.data.id, $scope.data)
            .success(function(res, status) {
                Data.atualizarCasasOracao();
                Data.atualizarCidades();
            });
        else
            $http.post('http://52.67.32.2:3003/casaoracao/', $scope.data)
            .success(function(res, status) {
                Data.atualizarCasasOracao();
                Data.atualizarCidades();
            });
    }

    $scope.excluirCasaOracao = function() {
        $http.delete('http://52.67.32.2:3003/casaoracao/' + $scope.data.id, {})
        .success(function(res, status) {
            Data.atualizarCasasOracao();
            Data.atualizarCidades();
        });
    };

    $scope.confirmarExclusaoCasaOracao = function() {
        Modal.open('casaoracao-exclusao', $scope.data);
    };

    $scope.salvarTerreno = function() {
        if ($scope.data.id)
            $http.put('http://52.67.32.2:3003/terreno/' + $scope.data.id, $scope.data)
            .success(function(res, status) {
                Data.atualizarTerrenos();
                Data.atualizarCidades();
            });
        else
            $http.post('http://52.67.32.2:3003/terreno/', $scope.data)
            .success(function(res, status) {
                Data.atualizarTerrenos();
                Data.atualizarCidades();
            });
    }

    $scope.excluirTerreno = function() {
        $http.delete('http://52.67.32.2:3003/terreno/' + $scope.data.id, {})
        .success(function(res, status) {
            Data.atualizarTerrenos();
            Data.atualizarCidades();
        });
    };

    $scope.confirmarExclusaoTerreno = function() {
        Modal.open('terreno-exclusao', $scope.data);
    };

    $scope.salvarUsuario = function() {
        if ($scope.data.id)
            $http.put('http://52.67.32.2:3003/usuario/' + $scope.data.id, $scope.data)
            .success(function(res, status) {
                Data.atualizarUsuarios();
                Data.atualizarAdministracoes();
            });
        else
            $http.post('http://52.67.32.2:3003/usuario/', $scope.data)
            .success(function(res, status) {
                Data.atualizarUsuarios();
                Data.atualizarAdministracoes();
            });
    }

    $scope.excluirUsuario = function() {
        $http.delete('http://52.67.32.2:3003/usuario/' + $scope.data.id, {})
        .success(function(res, status) {
            Data.atualizarUsuario();
            Data.atualizarAdministracoes();
        });
    };

    $scope.confirmarExclusaoUsuario = function() {
        Modal.open('usuario-exclusao', $scope.data);
    };
}
