angular
    .module('app')
    .directive('documentosPropriedade', DocumentosPropriedade);

DocumentosPropriedade.$inject = ['$timeout', 'Modal'];

function DocumentosPropriedade($timeout, Modal) {
    return {
        restrict: 'A',
        link: function(scope, element, attr) {
            scope.Modal = Modal;
            scope.$watch('Modal.getTitle()', function(title) {
                if (title == 'documentos-propriedade')
                    element.modal('show');
                else
                    element.modal('hide');
            });

            $(element).bind('hide.bs.modal', function() {
                $timeout(function() {
                    if (Modal.getTitle() == 'documentos-propriedade')
                        Modal.closeAll();
                });
            });
        }
    };
}
