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
                this.click = function click() {
                    $mdDialog.show({
                        controllerAs: 'dialogCtrl',
                        controller: function($mdDialog) {
                            this.click = function() {
                                $mdDialog.hide();
                            };
                        },
                        preserveScope: true,
                        autoWrap: true,
                        skipHide: true,
                        template: '<md-dialog class="confirm"><md-conent><md-button ng-click="dialogCtrl.click()">I am in a 2nd dialog!</md-button></md-conent></md-dialog>'
                    });
                };
            },
            autoWrap: false,
            template: '<md-dialog class="stickyDialog" data-type="{{::dialogCtrl.thing.title}}"><md-conent><md-button ng-click="dialogCtrl.click()">I am in a dialog!</md-button></md-conent></md-dialog>',
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
