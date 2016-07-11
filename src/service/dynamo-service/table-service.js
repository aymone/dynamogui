'use strict';

/**
 * TableService
 * @param {any} DynamoDB
 * @param {any} $q
 */
function TableService(DynamoDB) {
    return {
        describe: describe,
        list: list
    };

    /**
     * List tables
     * @returns {Array} Table list
     */
    function list() {
        return DynamoDB
            .listTablesAsync()
            .then(function(data) {
                return data.TableNames;
            });
    }

    /**
     * Describe table
     * @param {String} table - Table name to describe
     */
    function describe(tableName) {
        return DynamoDB
            .describeTableAsync({
                TableName: tableName
            });
    }
}

TableService.$inject = ['DynamoDB'];

module.exports = TableService;
