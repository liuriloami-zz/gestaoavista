angular
    .module('app')
    .directive('coletas', Coletas);

Coletas.$inject = ['$timeout', 'Modal'];

function Coletas($timeout, Modal) {
    return {
        restrict: 'A',
        link: function(scope, element, attr) {
            scope.Modal = Modal;
            scope.$watch('Modal.getTitle()', function(title) {
                if (title == 'coletas')
                    element.modal('show');
                else
                    element.modal('hide');
            });

            $(element).bind('hide.bs.modal', function() {
                $timeout(function() {
                    if (Modal.getTitle() == 'coletas')
                        Modal.closeAll();
                });
            });
        }
    };
}
