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
    } else {
        $scope.editavel = false;
        $scope.titulo = 'Resumo da administração';
    }

    $scope.$watch('Data.getCasasOracao()', function(casas_oracao) {
        if ($scope.editavel) {
            $scope.casas_oracao = casas_oracao.map(function(casa_oracao) {
                casa_oracao.coleta = casa_oracao.coletas.filter(function(coleta) {
                    return coleta.mes == $scope.meses[$scope.mes];
                })[0];
                return casa_oracao;
            });
        } else {
            $scope.casas_oracao = casas_oracao.map(function(casa_oracao) {
                casa_oracao.coleta = casa_oracao.coletas[0];
                casa_oracao.coletas.forEach(function(coleta, index) {
                    if (index == 0) return;
                    for (var k in coleta)
                        if (!isNaN(coleta[k]))
                            casa_oracao.coleta[k] += coleta[k];
                });
                return casa_oracao;
            });
        }
    }, true);

    $scope.editarColeta = function(casa_oracao) {
        if ($scope.editavel) Modal.open('coletas', casa_oracao);
    }

}
