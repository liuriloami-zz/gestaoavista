angular
    .module('app')
    .controller('ColetasController', ColetasController);

ColetasController.$inject = ['$scope', 'Data', 'Modal', '$routeParams'];

function ColetasController($scope, Data, Modal, $routeParams) {
    $scope.Modal = Modal;
    $scope.Data = Data;
    $scope.meses = Data.getMeses();
    $scope.mes = $routeParams.mes;
    $scope.usuario = Data.getUsuario();
    
    $scope.$watch('Data.getCasasOracao()', function(casas_oracao) {
        $scope.casas_oracao = casas_oracao;
        if (!isNaN($scope.mes)) {
            $scope.editavel = true;
            $scope.titulo = 'Coletas de ' + $scope.meses[$scope.mes];
            $scope.casas_oracao.map(function(casa_oracao) {
                casa_oracao.coleta = casa_oracao.coletas.filter(function(coleta) {
                    return coleta.mes == $scope.meses[$scope.mes];
                })[0];
                return casa_oracao;
            });
        }
    });
    
    $scope.$watch('Data.getResumoColetas()', function(resumo) {
        $scope.resumo = resumo;
    });

    if (isNaN($scope.mes)) {
        $scope.editavel = false;
        $scope.titulo = 'Resumo por administração';
    }

    $scope.editarColeta = function(casa_oracao) {
        if ($scope.editavel && $scope.usuario.tipo != 'Geral') {
            Modal.open('coletas', casa_oracao);
        }
    };
}
