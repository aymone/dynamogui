'use strict';

var sinon = require('sinon');
var expect = require('chai').expect;
var TableServiceModule = require('./table-service');
var Bluebird = require('bluebird');

describe('The table service', function() {
    var TableService;
    var DynamoDB;
    var DynamoDBMock;

    describe('list', function() {
        beforeEach(function() {
            DynamoDB = {
                listTablesAsync: function() { }
            };
            DynamoDBMock = sinon.mock(DynamoDB);
            TableService = new TableServiceModule(DynamoDB);
        });

        it('must return sampleList', function(done) {
            var sampleList = [];
            DynamoDBMock
                .expects('listTablesAsync')
                .once()
                .returns(Bluebird.resolve({ TableNames: sampleList }));

            return TableService
                .list()
                .then(function(response) {
                    expect(response).to.deep.equal(sampleList);
                    DynamoDBMock.verify();
                    done();
                });
        });

        it('must return empty sampleList', function(done) {
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
                    done();
                });
        });
    });

    describe('describe', function() {
        beforeEach(function() {
            DynamoDB = {
                describeTableAsync: function() { }
            };
            DynamoDBMock = sinon.mock(DynamoDB);
            TableService = new TableServiceModule(DynamoDB);
        });

        it('must return table described', function(done) {
            var sampleName = 'SampleName';
            DynamoDBMock
                .expects('describeTableAsync')
                .withArgs({ TableName: sampleName })
                .once()
                .returns(Bluebird.resolve({ name: sampleName }));

            return TableService
                .describe(sampleName)
                .then(function(response) {
                    expect(response).to.deep.equal({ name: sampleName });
                    DynamoDBMock.verify();
                    done();
                });
        });

        it('must reject describe', function(done) {
            var error = new Error('DynamoError');
            DynamoDBMock
                .expects('describeTableAsync')
                .withArgs({ TableName: undefined })
                .once()
                .returns(Bluebird.reject(error));

            return TableService
                .describe()
                .catch(function(err) {
                    expect(err).to.deep.equal(error);
                    DynamoDBMock.verify();
                    done();
                });
        });
    });
});
