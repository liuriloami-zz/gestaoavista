angular
    .module('app')
    .directive('terrenoExclusao', TerrenoExclusao);

TerrenoExclusao.$inject = ['$timeout', 'Modal'];

function TerrenoExclusao($timeout, Modal) {
    return {
        restrict: 'A',
        link: function(scope, element, attr) {
            scope.Modal = Modal;
            scope.$watch('Modal.getTitle()', function(title) {
                if (title == 'terreno-exclusao')
                    element.modal('show');
                else
                    element.modal('hide');
            });

            $(element).bind('hide.bs.modal', function() {
                $timeout(function() {
                    if (Modal.getTitle() == 'terreno-exclusao')
                        Modal.closeAll();
                });
            });
        }
    };
}
