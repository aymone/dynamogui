var AWS = require('aws-sdk');

angular
    .module('CredentialService', [])
    .factory('Credentials', Credentials);

function Credentials() {
    return {
        get: get
    };

    function get() {
        return {
            "accessKeyId": "ACCESS_KEY",
            "secretAccessKey": "SECRET_KEY",
            "region": "us-east-1",
            "endpoint": "http://localhost:4770/"
        };
    }
}
