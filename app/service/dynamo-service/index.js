require('./aws-service');

angular
    .module('DynamoService', ['AWSService'])
    .factory('TableService', require('./table-service'));
