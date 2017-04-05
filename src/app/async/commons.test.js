import nock from 'nock';
import {
	createDeleteFetch,
	createFetch,
	createGetFetch,
	HTTP_PATCH_METHOD,
	HTTP_POST_METHOD
} from './commons';
import {Promise} from 'es6-promise';

describe('commons fetch factory helper', () => {
	afterEach(() => {
		nock.cleanAll();
	})
	test('create get fetch', () => {
		const dummyJson = {value: 'value'};
		nock('http://localhost:8080')
			.get('/rms/api/values')
			.reply(200,  dummyJson);
		const url = '/values';
		const onSuccess = (json) => {
			return new Promise((resolve) => {
				return resolve(json);
			});
		}
		const onError = () => {}
		return createGetFetch(url, onSuccess, onError, {})
			.then(value => {
				expect(value).toEqual(dummyJson);
			})
	})
	test('failed get fetch', () => {
		const url = '/values';
		const onSuccess = () => {}
		const onError = error => {
			return new Promise((resolve, reject) => {
				return reject(error);
			})
		}
		return createGetFetch(url, onSuccess, onError, {})
			.catch(error => {
				expect(error).toBeDefined();
			})
	})
	test('create post fetch', () => {
		const dummyJson = {value: 'value'};
		nock('http://localhost:8080')
			.post('/rms/api/values')
			.reply(200, dummyJson);
		const url = '/values';
		const onSuccess = (json) => {
			return new Promise((resolve) => {
				return resolve(json);
			})
		}
		const onError = () => {}
		return createFetch(url, HTTP_POST_METHOD, onSuccess, onError, dummyJson)
			.then(json => {
				expect(json).toEqual(dummyJson);
			})
		})
	test('create patch fetch', () => {
		const dummyJson = {value: "value"};
		nock('http://localhost:8080')
			.patch('/rms/api/values/1')
			.reply(200, dummyJson);
		const url = '/values/1';
		const onSuccess = (json) => {
			return new Promise((resolve) => {
				return resolve(json);
			})
		}
		const onError = () => {}

		return createFetch(url, HTTP_PATCH_METHOD, onSuccess, onError, dummyJson)
			.then(json => {
				expect(json).toEqual(dummyJson);
			})
	})
	test('create delete fetch', () => {
		nock('http://localhost:8080')
			.delete('/rms/api/values/1')
			.reply(204);
		const url = '/values/1';
		const onSuccess = (response) => {
			return new Promise((resolve) => {
				return resolve(response);
			})
		}
		const onError = () => {}
		return createDeleteFetch(url, onSuccess, onError)
			.then(response => {
				expect(response.ok).toEqual(true);
				expect(response.status).toEqual(204);
			})
	})
})