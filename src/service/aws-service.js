require('./credential-service');
var AWS = require('aws-sdk');

angular
    .module('AWSService', ['CredentialService'])
    .factory('DynamoDB', DynamoDB);

function DynamoDB(Credentials) {
    AWS.config.update(Credentials.get());
    return new AWS.DynamoDB();
}
