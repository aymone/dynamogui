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
            })
            .catch(function(err) {
                console.log(err);
                return err;
            });
    }

    /**
     * Describe table
     * @param {String} table - Table name to describe
     */
    function describe(tableName) {
        if (!tableName) {
            return new Error('Invalid tableName');
        }

        var params = {
            TableName: tableName
        };

        return DynamoDB
            .describeTableAsync(params)
            .then(function(data) {
                return data;
            })
            .catch(function(err) {
                return err;
            });
    }
}

TableService.$inject = ['DynamoDB', '$q'];

module.exports = TableService;
