'use strict';

function MainController($scope, TableService) {
    var vm = this;
    vm.message = 'Workings!';
    vm.currentNavItem = 'page1';
    vm.test = "";

    function init() {
        TableService.list()
            .then(function(data) {
                vm.test = data;
            });
    }

    init();
};

MainController.$inject = ['$scope', 'TableService'];

module.exports = MainController;
