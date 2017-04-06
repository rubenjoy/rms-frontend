import configureMockStore from 'redux-mock-store';
import nock from 'nock';
import thunk from 'redux-thunk';

import {
	DELETE_ADDRESS_ASYNC,
	DELETE_ADDRESS_SUCCESS,
	deleteAddress,
	GET_ADDRESSES,
	GET_ADDRESSES_SUCCESS,
	getAddresses,
	PATCH_ADDRESS,
	PATCH_ADDRESS_SUCCESS,
	patchAddress,
	POST_ADDRESS,
	POST_ADDRESS_SUCCESS,
	postAddress
} from './actions';
import rmsApp from '../../rmsApp';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async action creator for address', () => {

	afterEach(() => {
		nock.cleanAll();
	})

	test('it should GET addresses', () => {
		const data = [
			{
				activeInd: true,
				address: 'Jalan'
			}
		];
		nock('http://localhost:8080')
			.get('/rms/api/employees/50/addresses')
			.reply(200, data);
		const expectedActions = [
			{type: GET_ADDRESSES},
			{
				type: GET_ADDRESSES_SUCCESS,
				addresses: data
			}
		]
		const store = mockStore(rmsApp);

		return store.dispatch(getAddresses('/employees/50'))
			.then(() => {
				const actions = store.getActions();
				expect(actions).toEqual(expectedActions);
			})
	})

	test('it should POST address', () => {
		const request = {
			activeInd: false,
			address: 'Jalan'
		};
		const response = Object.assign({}, request, {
			id: '50'
		})
		nock('http://localhost:8080')
			.post('/rms/api/employees/50/addresses', request)
			.reply(201, response);
		const expectedActions = [
			{type: POST_ADDRESS},
			{
				type: POST_ADDRESS_SUCCESS,
				activeInd: false,
				address: 'Jalan',
				id: '/employees/50/addresses/50'
			}
		]
		const store = mockStore(rmsApp);

		return store.dispatch(postAddress('/employees/50',request))
			.then(() => {
				const actions = store.getActions();
				expect(actions).toEqual(expectedActions);
			});
	})

	test('it should PATCH address', () => {
		const request = {
			activeInd: true,
			address: 'Jln. Surya Sumantri',
			id: 0
		}
		const response = Object.assign({}, request, {
			id: '50'
		})
		const address = Object.assign({}, request, {
			id: '/employees/50/addresses/50'
		});
		nock('http://localhost:8080')
			.patch('/rms/api/employees/50/addresses/50', request)
			.reply(200, response);
		const expectedActions = [
			{type: PATCH_ADDRESS},
			{type: PATCH_ADDRESS_SUCCESS, ...address}
		]
		const store = mockStore(rmsApp);

		return store.dispatch(patchAddress(address))
			.then(() => {
				const actions = store.getActions();
				expect(actions).toEqual(expectedActions);
			})
	})

	test('it should DELETE address', () => {
		nock('http://localhost:8080')
			.delete('/rms/api/employees/50/addresses/50')
			.reply(204);
		const expectedActions = [
			{type: DELETE_ADDRESS_ASYNC},
			{
				type: DELETE_ADDRESS_SUCCESS,
				id: '/employees/50/addresses/50'
			}
		]
		const store = mockStore(rmsApp);

		return store.dispatch(deleteAddress('/employees/50/addresses/50'))
			.then(() => {
				expect(store.getActions()).toEqual(expectedActions);
			})
	})
})