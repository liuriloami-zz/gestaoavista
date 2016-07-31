angular
    .module('app')
    .controller('ResumosController', ResumosController);

ResumosController.$inject = ['$scope', 'Data', 'Modal', '$routeParams'];

function ResumosController($scope, Data, Modal, $routeParams) {
    $scope.Modal = Modal;
    $scope.Data = Data;
    $scope.tipo = $routeParams.tipo;

    $scope.$watch('Data.getResumo(tipo)', function(resumo) {
        $scope.resumo_nome = resumo.nome;
        $scope.resumos = resumo.lista;
    });

    $scope.$watch('Data.getAdministracoes()', function(administracoes) {
        if ($scope.tipo == 'local')
            $scope.administracoes = [ administracoes[0] ];
        else
            $scope.administracoes = administracoes;
    });
}
