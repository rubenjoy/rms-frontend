import configureMockStore from 'redux-mock-store';
import nock from 'nock';
import thunk from 'redux-thunk';

import rmsApp from '../../rmsApp';
import {
	DELETE_DEPENDANT_ASYNC,
	DELETE_DEPENDANT_SUCCESS,
	deleteDependant,
	GET_DEPENDANTS,
	GET_DEPENDANTS_SUCCESS,
	getDependants,
	PATCH_DEPENDANT,
	PATCH_DEPENDANT_SUCCESS,
	patchDependant,
	POST_DEPENDANT,
	POST_DEPENDANT_SUCCESS,
	postDependant
} from './actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async action creator for dependant', () => {

	afterEach(() => {
		nock.cleanAll();
	})

	test('it should GET dependant', () => {
		const data = [{
			name: 'Mary Jane', 
			gender: 'Male',
			relation: 'Son',
			birthDate: '2011-05-18',
			activeInd: true,
			id: '/employees/50/dependents/50'
		}]
		nock('http://localhost:8080')
			.get('/rms/api/employees/50/dependents')
			.reply(200, data);
		const expectedActions = [
			{type: GET_DEPENDANTS},
			{type: GET_DEPENDANTS_SUCCESS, dependants: [{
				name: 'Mary Jane',
				gender: 'Male',
				relation: 'Son',
				birthDate: '2011-05-18',
				activeInd: true
			}]}
		]
		const store = mockStore(rmsApp);

		return store.dispatch(getDependants('/employees/50'))
			.then(() => {
				const actions = store.getActions();
				expect(actions.length).toEqual(2);
				expect(actions[0]).toEqual(expectedActions[0]);
				expect(actions[1].type).toEqual(
					expectedActions[1].type
				);
				expect(actions[1].dependants[0].name)
					.toEqual('Mary Jane');
				expect(actions[1].dependants[0].gender)
					.toEqual('Male');
				expect(actions[1].dependants[0].relation)
					.toEqual('Son');
				expect(actions[1].dependants[0].id)
					.toEqual('/employees/50/dependents/50');
			});
	})
	test('it should POST dependant', () => {
		const data = {
			name: 'Mary Jane',
			relation: 'SON',
			birthDate: '2011-05-18',
			activeInd: true,
			id: '50'
		}
		nock('http://localhost:8080')
			.post('/rms/api/employees/50/dependents')
			.reply(200, data);
		const expectedActions = [
			{type: POST_DEPENDANT},
			{
				type: POST_DEPENDANT_SUCCESS,
				name: 'Mary Jane', 
				relation: 'Son',
				gender: 'Male',
				birthDate: new Date('2011-05-18'),
				activeInd: true,
				id: '/employees/50/dependents/50'
			}
		]
		const store = mockStore(rmsApp);

		return store.dispatch(postDependant('/employees/50',{}))
			.then(() => {
				const actions = store.getActions();
				expect(actions.length).toEqual(2);
				expect(actions[0]).toEqual(expectedActions[0]);
				expect(actions[1].type).toEqual(
					expectedActions[1].type
				);
				expect(actions[1].name).toEqual(
					expectedActions[1].name
				);
				expect(actions[1].gender).toEqual(
					expectedActions[1].gender
				);
				expect(actions[1].id).toEqual(
					expectedActions[1].id
				);
			})
	})
	test('it should PATCH dependant', () => {
		const data = {
			name: 'Mary Jane',
			relation: 'SON',
			birthDate: '2011-05-18',
			activeInd: true,
			id: '50'
		}
		nock('http://localhost:8080')
			.patch('/rms/api/employees/50/dependents/50')
			.reply(200, data);
		const expectedActions = [
			{type: PATCH_DEPENDANT},
			{type: PATCH_DEPENDANT_SUCCESS}
		]
		const store = mockStore(rmsApp);
		const dummyDep = {
			id: '/employees/50/dependents/50'
		}

		return store.dispatch(patchDependant(dummyDep))
			.then(() => {
				const actions = store.getActions();
				expect(actions.length).toEqual(expectedActions.length);
				expect(actions[0]).toEqual(expectedActions[0]);
				expect(actions[1].name).toEqual('Mary Jane');
				expect(actions[1].type).toEqual(expectedActions[1].type);
				expect(actions[1].id).toEqual('/employees/50/dependents/50');
				expect(actions[1].gender).toEqual('Male');
			});
	})
	test('it should DELETE dependant', () => {
		const urlId = '/employees/50/dependents/50';
		nock('http://localhost:8080')
			.delete('/rms/api/employees/50/dependents/50')
			.reply(204);
		const expectedActions = [
			{type: DELETE_DEPENDANT_ASYNC},
			{type: DELETE_DEPENDANT_SUCCESS, id: urlId}
		]
		const store = mockStore(rmsApp);

		return store.dispatch(deleteDependant(urlId))
			.then(() => {
				expect(store.getActions()).toEqual(expectedActions);
			})
	})
})
