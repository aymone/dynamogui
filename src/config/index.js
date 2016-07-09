angular
    .module('DynamoGUI')
    .config(config);

config.$inject = ['$mdThemingProvider'];
function config($mdThemingProvider) {
    $mdThemingProvider
        .theme('default');
}
