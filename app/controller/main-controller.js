'use strict';

function MainController($scope, TableService) {
    var vm = this;

    vm.currentTableName = 'Select One table';
    vm.tableList = [];
    vm.tableDescribe = "Select one table";

    vm.setTable = setTable;

    function init() {
        TableService.list()
            .then(function(data) {
                vm.tableList = data;
                setTable(data[0]);
            });
    }

    function setTable(tableName) {
        TableService.describe(tableName)
            .then(function(data) {
                vm.currentTableName = tableName;
                vm.tableDescribe = data;
            });
    }

    init();
};

MainController.$inject = ['$scope', 'TableService'];

module.exports = MainController;
