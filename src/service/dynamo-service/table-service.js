'use strict';

/**
 * TableService
 * @param {any} DynamoDB
 * @param {any} $q
 */
function TableService(DynamoDB, $q) {
    return {
        describe: describe,
        list: list
    };

    /**
     * List tables
     * @returns {Array} Table list
     */
    function list() {
        var deferred = $q.defer();

        DynamoDB.listTables(function(err, data) {
            if (err) {
                deferred.reject(err);
            }
            deferred.resolve(data.TableNames);
        });

        return deferred.promise;
    }

    /**
     * Describe table
     * @param {String} table - Table name to describe
     */
    function describe(tableName) {
        var deferred = $q.defer();
        var params = {
            TableName: tableName
        };

        if (!tableName) {
            deferred.reject('Table name to be described is required');
        }

        DynamoDB.describeTable(params, function(err, data) {
            if (err) {
                deferred.reject(err);
            }
            deferred.resolve(data);
        });

        return deferred.promise;
    }
}

TableService.$inject = ['DynamoDB', '$q'];

module.exports = TableService;
