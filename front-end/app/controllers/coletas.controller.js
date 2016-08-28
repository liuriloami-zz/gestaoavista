angular
    .module('app')
    .controller('ColetasController', ColetasController);

ColetasController.$inject = ['$scope', 'Data', 'Modal', '$routeParams'];

function ColetasController($scope, Data, Modal, $routeParams) {
    $scope.Modal = Modal;
    $scope.Data = Data;
    $scope.meses = Data.getMeses();
    $scope.mes = $routeParams.mes;

    if (!isNaN($scope.mes)) {
        $scope.editavel = true;
        $scope.titulo = 'Coletas de ' + $scope.meses[$scope.mes];
        $scope.casas_oracao = Data.getCasasOracao().map(function(casa_oracao) {
            casa_oracao.coleta = casa_oracao.coletas.filter(function(coleta) {
                return coleta.mes == $scope.meses[$scope.mes];
            })[0];
            return casa_oracao;
        });
    } else {
        $scope.editavel = false;
        $scope.titulo = 'Resumo por administração';
        $scope.resumo = Data.getResumoColetas();
        console.log($scope.resumo);
    }

    $scope.editarColeta = function(casa_oracao) {
        if ($scope.editavel) Modal.open('coletas', casa_oracao);
    }

}
