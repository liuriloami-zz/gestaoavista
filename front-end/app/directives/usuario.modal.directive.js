angular
    .module('app')
    .directive('usuario', Usuario);

Usuario.$inject = ['$timeout', 'Modal'];

function Usuario($timeout, Modal) {
    return {
        restrict: 'A',
        link: function(scope, element, attr) {
            scope.Modal = Modal;
            scope.$watch('Modal.getTitle()', function(title) {
                if (title == 'usuario')
                    element.modal('show');
                else
                    element.modal('hide');
            });

            $(element).bind('hide.bs.modal', function() {
                $timeout(function() {
                    if (Modal.getTitle() == 'usuario')
                        Modal.closeAll();
                });
            });
        }
    };
}
