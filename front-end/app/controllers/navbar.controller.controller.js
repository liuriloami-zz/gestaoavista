angular
    .module('app')
    .controller('NavbarController', NavbarController);

NavbarController.$inject = ['$scope', 'Data', 'Modal'];

function NavbarController($scope, Data, Modal) {
    $scope.Modal = Modal;
    $scope.Data = Data;
    
    $scope.$watch('Data.getCasasOracao()', function(casas_oracao) {
        $scope.casas_oracao = casas_oracao;
    });
    
    $scope.$watch('Data.getCidades()', function(cidades) {
        $scope.cidades = cidades;
    });

    $scope.alterarSenha = function() {
        Modal.open('alterar-senha', Data.getUser());
    };

    $scope.sair = function() {
        Data.sair();
    };
}
