angular
    .module('app')
    .controller('AdministracoesController', AdministracoesController);

AdministracoesController.$inject = ['$scope', 'Data', 'Modal'];

function AdministracoesController($scope, Data, Modal) {
    $scope.Modal = Modal;
    $scope.Data = Data;

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
