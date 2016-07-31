angular
    .module('app')
    .directive('projetos', Projetos);

Projetos.$inject = ['$timeout', 'Modal'];

function Projetos($timeout, Modal) {
    return {
        restrict: 'A',
        link: function(scope, element, attr) {
            scope.Modal = Modal;
            scope.$watch('Modal.getTitle()', function(title) {
                if (title == 'projetos')
                    element.modal('show');
                else
                    element.modal('hide');
            });

            $(element).bind('hide.bs.modal', function() {
                $timeout(function() {
                    if (Modal.getTitle() == 'projetos')
                        Modal.closeAll();
                });
            });
        }
    };
}
