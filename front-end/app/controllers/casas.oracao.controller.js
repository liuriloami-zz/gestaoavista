angular
    .module('app')
    .controller('CasasOracaoController', CasasOracaoController);

CasasOracaoController.$inject = ['$scope', 'Data', 'Modal'];

function CasasOracaoController($scope, Data, Modal) {
    $scope.Modal = Modal;
    $scope.Data = Data;

    $scope.$watch('Data.getCasasOracao()', function(casas_oracao) {
        $scope.casas_oracao = casas_oracao;
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

    $scope.novaCasaOracao = function(modal) {
        Modal.open(modal, {});
    }

    $scope.editarCasaOracao = function(modal, casa_oracao) {
        Modal.open(modal, casa_oracao);
    }
}
