require('angular');

const ngMaterial = require('angular-material');
const app = angular.module('app', ['ngMaterial']);

app.controller('MainController', ($scope) => {
    $scope.message = 'Workings!';
});
