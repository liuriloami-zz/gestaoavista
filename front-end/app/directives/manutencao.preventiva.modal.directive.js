angular
    .module('app')
    .directive('manutencaoPreventiva', ManutencaoPreventiva);

ManutencaoPreventiva.$inject = ['$timeout', 'Modal'];

function ManutencaoPreventiva($timeout, Modal) {
    return {
        restrict: 'A',
        link: function(scope, element, attr) {
            scope.Modal = Modal;
            scope.$watch('Modal.getTitle()', function(title) {
                if (title == 'manutencao-preventiva')
                    element.modal('show');
                else
                    element.modal('hide');
            });

            $(element).bind('hide.bs.modal', function() {
                $timeout(function() {
                    if (Modal.getTitle() == 'manutencao-preventiva')
                        Modal.closeAll();
                });
            });
        }
    };
}
