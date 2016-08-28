angular
    .module('app')
    .controller('AdministracoesController', AdministracoesController);

AdministracoesController.$inject = ['$scope', 'Data', 'Modal', '$location'];

function AdministracoesController($scope, Data, Modal, $location) {
    $scope.Modal = Modal;
    $scope.Data = Data;
    
    $scope.usuario = Data.getUsuario();
    if ($scope.usuario.tipo != 'Administrador') {
        $location.path('/informacoes-gerais');
    }

    $scope.$watch('Data.getAdministracoes()', function(administracoes) {
        $scope.administracoes = administracoes;
    });

    $scope.novaAdministracao = function() {
        Modal.open('administracao', null);
    }

    $scope.editarAdministracao = function(administracao) {
        Modal.open('administracao', administracao);
    }
}
