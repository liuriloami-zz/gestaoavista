angular
    .module('app')
    .controller('ColetasController', ColetasController);

ColetasController.$inject = ['$scope', 'Data', 'Modal', '$routeParams'];

function ColetasController($scope, Data, Modal, $routeParams) {
    $scope.Modal = Modal;
    $scope.Data = Data;
    $scope.casa_oracao_slug = $routeParams.casa_oracao_slug || null;
    $scope.cidade_slug = $routeParams.cidade_slug || null;

    $scope.$watch('Data.getCidades()', function(cidades) {
        if ($scope.cidade_slug != 'resumo') {
            var data = Data.getColetas($scope.cidade_slug);
            $scope.editavel = true;
            $scope.titulo = data.cidade;
            $scope.coletas = data.coletas;
        } else {
            $scope.coletas = Data.getResumoColetas();
            $scope.titulo = 'Resumo das coletas';
        }
    }, true);

    $scope.editarColeta = function(coleta) {
        if ($scope.editavel) Modal.open('coletas', coleta);
    }

}
