angular
    .module('app')
    .directive('terreno', Terreno);

Terreno.$inject = ['$timeout', 'Modal'];

function Terreno($timeout, Modal) {
    return {
        restrict: 'A',
        link: function(scope, element, attr) {
            scope.Modal = Modal;
            scope.$watch('Modal.getTitle()', function(title) {
                if (title == 'terreno')
                    element.modal('show');
                else
                    element.modal('hide');
            });

            $(element).bind('hide.bs.modal', function() {
                $timeout(function() {
                    if (Modal.getTitle() == 'terreno')
                        Modal.closeAll();
                });
            });
        }
    };
}
