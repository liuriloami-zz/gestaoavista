angular
    .module('app')
    .directive('alterarSenha', AlterarSenha);

AlterarSenha.$inject = ['$timeout', 'Modal'];

function AlterarSenha($timeout, Modal) {
    return {
        restrict: 'A',
        link: function(scope, element, attr) {
            scope.Modal = Modal;
            scope.$watch('Modal.getTitle()', function(title) {
                if (title == 'alterar-senha')
                    element.modal('show');
                else
                    element.modal('hide');
            });

            $(element).bind('hide.bs.modal', function() {
                $timeout(function() {
                    if (Modal.getTitle() == 'alterar-senha')
                        Modal.closeAll();
                });
            });
        }
    };
}
