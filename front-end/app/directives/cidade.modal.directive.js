angular
    .module('app')
    .directive('cidade', Cidade);

Cidade.$inject = ['$timeout', 'Modal'];

function Cidade($timeout, Modal) {
    return {
        restrict: 'A',
        link: function(scope, element, attr) {
            scope.Modal = Modal;
            scope.$watch('Modal.getTitle()', function(title) {
                if (title == 'cidade')
                    element.modal('show');
                else
                    element.modal('hide');
            });

            $(element).bind('hide.bs.modal', function() {
                $timeout(function() {
                    if (Modal.getTitle() == 'cidade')
                        Modal.closeAll();
                });
            });
        }
    };
}
