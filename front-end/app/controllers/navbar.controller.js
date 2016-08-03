angular
    .module('app')
    .controller('NavbarController', NavbarController);

NavbarController.$inject = ['$scope', 'Data', 'Modal', '$cookies', '$location'];

function NavbarController($scope, Data, Modal, $cookies, $location) {
    $scope.Modal = Modal;
    $scope.Data = Data;
    
    $scope.$watch('Data.getCasasOracao()', function(casas_oracao) {
        $scope.casas_oracao = casas_oracao;
    });
    
    $scope.$watch('Data.getUsuario()', function(usuario) {
        $scope.usuario = usuario;
    });
    
    $scope.$watch('Data.getCidades()', function(cidades) {
        $scope.cidades = cidades;
    });

    $scope.alterarSenha = function() {
        Modal.open('alterar-senha', $scope.usuario);
    };

    $scope.sair = function() {
        $cookies.remove('usuario');
        Data.usuario = null;
        $location.url('/login')
    };
}
