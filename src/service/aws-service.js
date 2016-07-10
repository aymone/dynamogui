require('./credential-service');
var AWS = require('aws-sdk');
var Bluebird = require("bluebird");

angular
    .module('AWSService', ['CredentialService'])
    .factory('DynamoDB', DynamoDB);

function DynamoDB(Credentials) {
    AWS.config.update(Credentials.get());

    var dynamoDb = new AWS.DynamoDB();
    Bluebird.promisifyAll(Object.getPrototypeOf(dynamoDb));

    return dynamoDb;
}
