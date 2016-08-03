angular
    .module('app')
    .directive('usuarioExclusao', UsuarioExclusao);

UsuarioExclusao.$inject = ['$timeout', 'Modal'];

function UsuarioExclusao($timeout, Modal) {
    return {
        restrict: 'A',
        link: function(scope, element, attr) {
            scope.Modal = Modal;
            scope.$watch('Modal.getTitle()', function(title) {
                if (title == 'usuario-exclusao')
                    element.modal('show');
                else
                    element.modal('hide');
            });

            $(element).bind('hide.bs.modal', function() {
                $timeout(function() {
                    if (Modal.getTitle() == 'usuario-exclusao')
                        Modal.closeAll();
                });
            });
        }
    };
}
