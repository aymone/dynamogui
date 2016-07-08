require('angular');
require('angular-material');

angular
    .module('DynamoGUI', [
        'ngMaterial',
        'DynamoService'
    ]);

require('./config');
require('./controller');
require('./service');
