angular
    .module('app')
    .controller('ResumosController', ResumosController);

ResumosController.$inject = ['$scope', 'Data', 'Modal', '$routeParams'];

function ResumosController($scope, Data, Modal, $routeParams) {
    $scope.Modal = Modal;
    $scope.Data = Data;
    $scope.tipo = $routeParams.tipo;
    $scope.resumos = null;
    $scope.$watch('Data.getAdministracoes()', function(administracoes) {
        if (administracoes.length > 0) {
            $scope.resumos = Data.getResumos();
        }
    });
}
