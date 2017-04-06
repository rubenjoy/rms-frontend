import configureMockStore from 'redux-mock-store';
import nock from 'nock';
import thunk from 'redux-thunk';

import rmsApp from '../../rmsApp';
import {
	DELETE_LOCATION_ASYNC,
	DELETE_LOCATION_SUCCESS,
	deleteLocation,
	GET_LOCATIONS,
	GET_LOCATIONS_SUCCESS,
	getLocations,
	PATCH_LOCATION,
	PATCH_LOCATION_SUCCESS,
	patchLocation,
	POST_LOCATION,
	POST_LOCATION_SUCCESS,
	postLocation,
} from './actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
	
describe('async action creator for location', () => {

	afterEach(() => {
		nock.cleanAll();
	})

	test('it should GET locations', () => {
		const response = [{
			id: '/employees/50/locations/50',
			branchOffice: 'bali suwung',
			startDate: '2016-01-04',
			endDate: '2017-12-24',
			activeInd: false
		}]
		nock('http://localhost:8080')
			.get('/rms/api/employees/50/locations')
			.reply(200, response);
		const expected = [
			{type: GET_LOCATIONS},
			{
				type: GET_LOCATIONS_SUCCESS,
				locations: [{
					id: '/employees/50/locations/50',
					branchOffice: 'bali suwung',
					startDate: '2016-01-04',
					endDate: '2017-12-24',
					activeInd: false
				}]
			}
		]
		const store = mockStore(rmsApp);

		return store.dispatch(getLocations('/employees/50'))
			.then(() => {
				const actions = store.getActions();
				expect(actions).toEqual(expected);
			})
	});

	test('it should POST location', () => {
		const response = {
			id: '50',
			branchOffice: 'bali suwung',
			startDate: '2016-01-04',
			endDate: '2017-12-24',
			activeInd: false
		}
		nock('http://localhost:8080')
			.post('/rms/api/employees/50/locations')
			.reply(200, response);
		const expected = [
			{type: POST_LOCATION},
			{
				type: POST_LOCATION_SUCCESS,
				id: '/employees/50/locations/50',
				branchOffice: 'bali suwung',
				startDate: '2016-01-04',
				endDate: '2017-12-24',
				activeInd: false
			}
		] 
		const store = mockStore(rmsApp);

		return store.dispatch(postLocation('/employees/50', {}))
			.then(() => {
				const actions = store.getActions();
				expect(actions).toEqual(expected);
			})
	})

	test('it should PATCH location', () => {
		const response = {
			id: '50',
			branchOffice: 'bali suwung',
			startDate: '2016-01-04',
			endDate: '2017-12-24',
			activeInd: false
		}
		const location = Object.assign({}, response, {
			id: '/employees/50/locations/50'
		})
		nock('http://localhost:8080')
			.patch('/rms/api/employees/50/locations/50')
			.reply(200, response);
		const expected = [
			{type: PATCH_LOCATION},
			{
				type: PATCH_LOCATION_SUCCESS,
				id: '/employees/50/locations/50',
				branchOffice: 'bali suwung',
				startDate: '2016-01-04',
				endDate: '2017-12-24',
				activeInd: false
			}
		]
		const store = mockStore(rmsApp);

		return store.dispatch(patchLocation(location))
			.then(() => {
				expect(store.getActions()).toEqual(expected);
			})
	})

	test('it should DELETE location', () => {
		nock('http://localhost:8080')
			.delete('/rms/api/employees/50/locations/50')
			.reply(204);
		const expected = [
			{type: DELETE_LOCATION_ASYNC},
			{
				type: DELETE_LOCATION_SUCCESS,
				id: '/employees/50/locations/50'
			}
		]
		const store = mockStore(rmsApp);

		return store.dispatch(deleteLocation('/employees/50/locations/50'))
			.then(() => {
				expect(store.getActions()).toEqual(expected);
			})
	})
})