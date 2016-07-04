'use strict';

function Table(DynamoDB, $q) {
    return {
        get: get,
        list: list
    };

    function list() {
        // var deferred = $q.defer();
    }

    function get() {
        return "The Table get value";
    }
}

Table.$inject = ['DynamoDB', '$q'];

module.exports = Table;
