function MainController($scope, Table) {
    $scope.message = 'Workings!';
    $scope.currentNavItem = 'page1';
    $scope.test = Table.get();
};

module.exports = MainController;
