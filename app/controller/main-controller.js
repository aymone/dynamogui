'use strict';

function MainController($scope, Table) {
    var vm = this;
    vm.message = 'Workings!';
    vm.currentNavItem = 'page1';
    vm.test = Table.get();
};

MainController.$inject = ['$scope', 'Table'];

module.exports = MainController;
