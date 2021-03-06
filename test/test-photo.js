/* global init, assertFailure, dump */
'use strict';

require('./_base');

var fs = require('fs'),
	tests = require('./_base.tests'),
	assert = require('assert'),
	async = require('async'),
	should = require('should'),
	request = require('request');

describe('Photo', function () {

	var modelName = 'appc.arrowdb/photo',
		Model;

	init(this, function () {
		Model = this.connector.getModel(modelName);
	});

	describe('Create', function () {
		tests.create(modelName, {
			title: 'my.photo.' + Date.now(),
			photo: fs.createReadStream(__dirname + '/testfile.jpg'),
			photo_sizes: {preview: '120x120#'},
			'photo_sync_sizes[]': 'preview'
		});
	});

	describe('FindAll and FindByID', function () {
		tests.findAllAndFindByID(modelName);
	});

	describe('Query and Count', function () {
		tests.queryAndCount(modelName);
	});

	describe('Update', function () {
		tests.update(modelName, {title: 'my.photo.' + Date.now()});
	});

	describe('Delete All', function () {
		tests.deleteAll(modelName);
	});

});