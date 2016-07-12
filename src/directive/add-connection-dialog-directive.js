angular
    .module('DynamoGUI')
    .directive('add-connection-dialog', addConnectionDialog);

connectionDialog.$inject = ['$mdDialog'];
function addConnectionDialog($mdDialog) {
    return {
        controllerAs: 'dialogCtrl',
        clickOutsideToClose: true,
        bindToController: true,
        controller: addConnectionDialogCtrl,
        autoWrap: false,
        templateUrl: '/templates/add-connection-dialog-directive.html',
        locals: {
            thing: thing
        }
    };

    function addConnectionDialogCtrl() { }
}
