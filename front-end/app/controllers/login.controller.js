angular
    .module('app')
    .controller('LoginController', LoginController);

LoginController.$inject = ['$scope', 'Data', 'Modal', '$cookies', '$location'];

function LoginController($scope, Data, Modal, $cookies, $location) {
    $scope.Modal = Modal;
    $scope.Data = Data;
    $scope.erro = false;

    $scope.login = function() {
        var usuario = Data.getUsuarios().filter(function(usuario) {
            return usuario.email == $scope.email && usuario.senha == $scope.senha;
        });
        if (usuario.length == 0)
            $scope.erro = true;
        else {
            var usuario = JSON.stringify(usuario[0]);
            $cookies.put('usuario', usuario);

            Data.atualizarUsuarios();
            Data.atualizarAdministracoes();
            Data.atualizarCidades();
            Data.atualizarTerrenos();
            Data.atualizarCasasOracao();
            
            $location.url('/');
        }
    }
}
