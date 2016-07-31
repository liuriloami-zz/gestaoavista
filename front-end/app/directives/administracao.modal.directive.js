angular
    .module('app')
    .directive('administracao', Administracao);

Administracao.$inject = ['$timeout', 'Modal'];

function Administracao($timeout, Modal) {
    return {
        restrict: 'A',
        link: function(scope, element, attr) {
            scope.Modal = Modal;
            scope.$watch('Modal.getTitle()', function(title) {
                if (title == 'administracao')
                    element.modal('show');
                else
                    element.modal('hide');
            });

            $(element).bind('hide.bs.modal', function() {
                $timeout(function() {
                    if (Modal.getTitle() == 'administracao')
                        Modal.closeAll();
                });
            });
        }
    };
}
