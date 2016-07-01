require('angular');
require('angular-material');

const app = angular.module('DynamoGUI', ['ngMaterial']);

app.controller('MainController', function($scope) {
    $scope.message = 'Workingxs!';
    $scope.currentNavItem = 'page1';
});
