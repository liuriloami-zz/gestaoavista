angular
    .module('app')
    .controller('TerrenosController', TerrenosController);

TerrenosController.$inject = ['$scope', 'Data', 'Modal'];

function TerrenosController($scope, Data, Modal) {
    $scope.Modal = Modal;
    $scope.Data = Data;
    $scope.usuario = Data.getUsuario();

    $scope.$watch('Data.getTerrenos()', function(terrenos) {
        $scope.terrenos = terrenos;
    });

    $scope.gerarCor = function(valor) {
        if (valor == 'sim')
            return 'success';
        if (valor == 'nao')
            return 'danger';
        return '';
    };

    $scope.gerarIcone = function(valor) {
        if (valor == 'sim')
            return [ "fa", "fa-check" ];
        if (valor == 'nao')
            return [ "fa", "fa-times" ];
        return '';
    };

    $scope.novoTerreno = function() {
        if ($scope.usuario.tipo != 'Geral') {
            Modal.open('terreno', null);
        }
    }

    $scope.editarTerreno = function(terreno) {
        if ($scope.usuario.tipo != 'Geral') {
            Modal.open('terreno', terreno);
        }
    }

}
