angular
    .module('app')
    .controller('ColetasController', ColetasController);

ColetasController.$inject = ['$scope', 'Data', 'Modal', '$routeParams'];

function ColetasController($scope, Data, Modal, $routeParams) {
    $scope.Modal = Modal;
    $scope.Data = Data;
    $scope.casa_oracao_slug = $routeParams.casa_oracao_slug || null;
    $scope.cidade_slug = $routeParams.cidade_slug || null;

    var data = Data.getColetas($scope.cidade_slug, $scope.casa_oracao_slug);
    $scope.titulo = data.titulo;
    $scope.cidade = data.cidade;
    $scope.coletas = data.coletas;

    $scope.editarColeta = function(coleta) {
        if ($scope.casa_oracao_slug)
            Modal.open('coletas', coleta);
    }

}
