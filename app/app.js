require('angular');
require('angular-material');

angular
    .module('DynamoGUI', [
        'ngMaterial',
        'DynamoService'
    ]);

require('./controller');
require('./service');
