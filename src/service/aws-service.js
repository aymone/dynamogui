var AWS = require('aws-sdk');

angular
    .module('AWSService', [])
    .factory('DynamoDB', DynamoDB);

function DynamoDB() {
    AWS.config.update({
        "accessKeyId": "ACCESS_KEY",
        "secretAccessKey": "SECRET_KEY",
        "region": "us-east-1",
        "endpoint": "http://localhost:4770/"
    });
    return new AWS.DynamoDB();
}