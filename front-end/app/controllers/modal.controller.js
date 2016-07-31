angular
    .module('app')
    .controller('ModalController', ModalController);

ModalController.$inject = ['$scope', 'Modal', 'Data', '$http', 'Slug'];

function ModalController($scope, Modal, Data, $http, Slug) {
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
            $http.put('http://localhost:3003/administracao/' + $scope.data.id, $scope.data)
            .success(function(res, status) {
                Data.atualizarAdministracoes();
            });
        else
            $http.post('http://localhost:3003/administracao/', $scope.data)
            .success(function(res, status) {
                Data.atualizarAdministracoes();
            });
    }

    $scope.salvarCidade = function() {
        if ($scope.data.id)
            $http.put('http://localhost:3003/cidade/' + $scope.data.id, $scope.data)
            .success(function(res, status) {
                Data.atualizarCidades();
            });
        else
            $http.post('http://localhost:3003/cidade/', $scope.data)
            .success(function(res, status) {
                Data.atualizarCidades();
            });
    }

    $scope.salvarColetas = function() {
        if ($scope.data.id)
            $http.put('http://localhost:3003/coletas/' + $scope.data.id, $scope.data)
            .success(function(res, status) {
                Data.atualizarColetas();
            });
        else
            $http.post('http://localhost:3003/coletas/', $scope.data)
            .success(function(res, status) {
                Data.atualizarColetas();
            });
    }

    $scope.salvarCasaOracao = function() {
        if ($scope.data.id)
            $http.put('http://localhost:3003/casaoracao/' + $scope.data.id, $scope.data)
            .success(function(res, status) {
                Data.atualizarCasasOracao();
            });
        else
            $http.post('http://localhost:3003/casaoracao/', $scope.data)
            .success(function(res, status) {
                Data.atualizarCasasOracao();
            });
    }

    $scope.salvarTerreno = function() {
        if ($scope.data.id)
            $http.put('http://localhost:3003/terreno/' + $scope.data.id, $scope.data)
            .success(function(res, status) {
                Data.atualizarTerrenos();
            });
        else
            $http.post('http://localhost:3003/terreno/', $scope.data)
            .success(function(res, status) {
                Data.atualizarTerrenos();
            });
    }

    $scope.salvarUsuario = function() {
        if ($scope.data.id)
            $http.put('http://localhost:3003/usuario/' + $scope.data.id, $scope.data)
            .success(function(res, status) {
                Data.atualizarUsuarios();
            });
        else
            $http.post('http://localhost:3003/usuario/', $scope.data)
            .success(function(res, status) {
                Data.atualizarUsuarios();
            });
    }
}
