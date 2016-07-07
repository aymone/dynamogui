var AWS = require('aws-sdk');

var auths = {
    default: {
        "accessKeyId": "ACCESS_KEY",
        "secretAccessKey": "SECRET_KEY",
        "region": "us-east-1",
        "endpoint": "http://localhost:4770/"
    },
    teste: {
        "accessKeyId": "ACCESS_KEY",
        "secretAccessKey": "SECRET_KEY",
        "region": "us-east-1",
        "endpoint": "http://localhost:4770/"
    }
};

angular
    .module('AWSService', [])
    .factory('CredentialService', CredentialService)
    .factory('DynamoDB', DynamoDB);


DynamoDB.$inject = ['CredentialService'];
function DynamoDB(CredentialService) {
    var dynamo = false;
    return new AWS.DynamoDB();
}

CredentialService.$inject = ['$scope'];
function CredentialService($scope) {
    var connected = false;

    function set(credential) {
        AWS.config.update(credential);
        return get();
    }

    function get() {
        return AWS.config
            .getCredentials(function(err) {
                connected = err ? false : true;
                return connected;
            });
    }
}
