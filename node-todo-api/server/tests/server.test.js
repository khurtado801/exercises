/* eslint-disable */

/**
 * Library imports
 */
const expect = require('expect');
const request = require('supertest');

/**
 * Local imports
 */
const {app} = require('../server');
const {Todo} = require('../models/todo');

describe('POST /todos', () => {
	it('should create a new todo', (done) => {
		var test = 'Test todo text';

		request(app)
			.post('/todos')
			.send({text})
			.expect(200)
			.expect((res) => {
				expect(res.body.text).toBe(text)
			})
			.end((err, res) => {

			});
	});
});
