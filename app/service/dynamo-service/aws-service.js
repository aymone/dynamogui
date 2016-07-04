const AWS = require('aws-sdk');

angular
    .module('AwsService', [])
    .factory('DynamoDB', DynamoDB);

function DynamoDB() {
    AWS.config.update({
        "accessKeyId": "ACCESS_KEY",
        "secretAccessKey": "SECRET_KEY",
        "region": "us-east-1",
        "endpoint": "http://dynamodb_dev.host:4761"
    });
    return new AWS.DynamoDB();
}
