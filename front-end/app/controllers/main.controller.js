angular
    .module('app')
    .controller('MainController', MainController);

MainController.$inject = ['$scope', 'Data', 'Modal', '$location', '$cookies'];

function MainController($scope, Data, Modal, $location, $cookies) {
    $scope.Modal = Modal;
    $scope.Data = Data;
    $scope.$location = $location;

    $scope.$watch('$location.url()', function(url) {
        if (url == '/login')
            $scope.login = true;
        else if (!$cookies.get('usuario'))
            $location.url('/login');
        else
            $scope.login = false;
    });
    
}
