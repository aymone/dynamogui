'use strict';

var sinon = require('sinon');
var expect = require('chai').expect;
var TableServiceModule = require('./table-service');
var Bluebird = require("bluebird");

describe("The table service", function() {
    var TableService;
    var DynamoDB;
    var DynamoDBMock;

    DynamoDB = {
        listTablesAsync: function() { }
    };

    DynamoDBMock = sinon.mock(DynamoDB);

    beforeEach(function() {
        TableService = new TableServiceModule(DynamoDB);
    });

    it("must return sampleList", function() {
        var sampleList = ['Sample'];
        DynamoDBMock
            .expects('listTablesAsync')
            .once()
            .returns(Bluebird.resolve({ TableNames: sampleList }));

        return TableService
            .list()
            .then(function(response) {
                expect(response).to.deep.equal(sampleList);
                DynamoDBMock.verify();
            });
    });
});
