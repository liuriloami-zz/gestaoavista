angular
    .module('app')
    .directive('confrontacao', Confrontacao);

Confrontacao.$inject = ['$timeout', 'Modal'];

function Confrontacao($timeout, Modal) {
    return {
        restrict: 'A',
        link: function(scope, element, attr) {
            scope.Modal = Modal;
            scope.$watch('Modal.getTitle()', function(title) {
                if (title == 'confrontacao')
                    element.modal('show');
                else
                    element.modal('hide');
            });

            $(element).bind('hide.bs.modal', function() {
                $timeout(function() {
                    if (Modal.getTitle() == 'confrontacao')
                        Modal.closeAll();
                });
            });
        }
    };
}
