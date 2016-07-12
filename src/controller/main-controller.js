'use strict';

function MainController($scope, TableService, $mdDialog) {
    var vm = this;

    vm.currentTableName = 'Select One table';
    vm.tableList = [];
    vm.tableDescribe = 'No table selected';

    vm.setTable = setTable;

    vm.moreInfo = moreInfo;

    function moreInfo(thing) {
        $mdDialog.show({
            controllerAs: 'dialogCtrl',
            clickOutsideToClose: true,
            bindToController: true,
            controller: function($mdDialog) {

            },
            autoWrap: false,
            templateUrl: 'templates/add-connection-dialog-directive.html',
            locals: {
                thing: thing
            }
        });
    }


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

MainController.$inject = ['$scope', 'TableService', '$mdDialog'];

module.exports = MainController;
