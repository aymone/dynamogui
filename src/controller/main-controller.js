'use strict';

function MainController($scope, TableService) {
    var vm = this;

    vm.currentTableName = 'Select One table';
    vm.tableList = [];
    vm.tableDescribe = 'No table selected';

    vm.setTable = setTable;

    function init() {
        TableService
            .list()
            .then(function(data) {
                if (!data[0]) {
                    vm.currentTableName = "No tables";
                } else {
                    vm.tableList = data;
                    setTable(data[0]);
                }
            });
    }

    function setTable(tableName) {
        TableService
            .describe(tableName)
            .then(function(data) {
                vm.currentTableName = tableName;
                vm.tableDescribe = data;
            });
    }

    init();
};

MainController.$inject = ['$scope', 'TableService'];

module.exports = MainController;
