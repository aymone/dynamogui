'use strict';

function MainController($scope, Table) {
    $scope.message = 'Workings!';
    $scope.currentNavItem = 'page1';
    $scope.test = Table.get();
}

MainController.$inject = ['$scope', 'Table'];

module.exports = MainController;
