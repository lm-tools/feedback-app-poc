/*global require, module*/
var ApiBuilder = require('claudia-api-builder'),
	AWS = require('aws-sdk'),
	api = new ApiBuilder(),
	uuid = require('node-uuid'),
	dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = api;

// Create new user
api.post('/survey', function (request) {
	'use strict';
	var params = {
		TableName: request.env.tableName,
		Item: {
			surveyid: uuid.v4(),
			answers: request.body
		}
	};
	// return dynamo result directly
	return dynamoDb.put(params).promise();
}, { success: 201 }); // Return HTTP status 201 - Created when successful


api.get('/survey', function (request) {
	'use strict';
	var params = {
		TableName: request.env.tableName
	};

	// post-process dynamo result before returning
	return dynamoDb.scan(params).promise().then(function (response) {
		return response.Items;
	});
});

api.addPostDeployConfig('tableName', 'DynamoDB Table Name:', 'configure-db');
