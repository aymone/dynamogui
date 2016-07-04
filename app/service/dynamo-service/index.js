require('./aws-service');

angular
    .module('DynamoService', ['AwsService'])
    .factory('Table', require('./table'));
