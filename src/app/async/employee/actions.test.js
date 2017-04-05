import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import {
	GET_EMPLOYEES,
	GET_EMPLOYEES_SUCCESS,
	getEmployees,
	PATCH_EMPLOYEE,
	PATCH_EMPLOYEE_SUCCESS, 
	patchEmployee,
	POST_EMPLOYEE,
	POST_EMPLOYEE_SUCCESS,
	postEmployee
} from './actions';
import {
	FETCH_FAIL
} from '../commons';
import rmsApp from '../../rmsApp';
import Employee from '../../containers/employee/Employee';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async action creator for employee', () => {

	afterEach(() => {
		nock.cleanAll();
	});

	test('when rest inaccesible, it should return failed action ', () => {
		const expectedActions = [
			{type: GET_EMPLOYEES},
			{
				type: FETCH_FAIL, 
				errStatus: -1 
			}
		];
		const store = mockStore(rmsApp);

		return store.dispatch(getEmployees(0))
			.then(() => {
				const actions = store.getActions();
				expect(actions.length).toEqual(2);
				expect(actions[0]).toEqual(expectedActions[0]);
				expect(actions[1].type)
					.toEqual(expectedActions[1].type);
				expect(actions[1].errStatus).
					toEqual(expectedActions[1].errStatus);
			});
	})

	test('it should return action with employees', () => {
		const employees = [
			new Employee({
				name: 'mukidi',
				id: '/employees/50'
			})
		];
		nock('http://localhost:8080')
			.get('/rms/api/employees')
			.query({page: 0, size: 20})
			.reply(200, employees);

		const expectedActions = [
			{type: GET_EMPLOYEES},
			{
				type: GET_EMPLOYEES_SUCCESS,
				employees
			}
		];
		const store = mockStore(rmsApp);

		return store.dispatch(getEmployees(0))
			.then(() => {
				const actions = store.getActions();
				expect(actions.length).toEqual(2);
				expect(actions[0]).toEqual(expectedActions[0]);
				expect(actions[1].type).toEqual(expectedActions[1].type);
				expect(actions[1].employees.length).toEqual(1);
				expect(actions[1].employees[0].id).toEqual('/employees/50');
			})
	});

	test('it should return action with POSTed employee', () => {
		const input = new Employee({
			name: 'mukidi',
			id: '/employees/50'
		});

		nock('http://localhost:8080')
			.post('/rms/api/employees')
			.reply(201, input);

		const expectedActions = [
			{type: POST_EMPLOYEE},
			{
				type: POST_EMPLOYEE_SUCCESS,
				...input
			}
		];

		const store = mockStore(rmsApp);
		return store.dispatch(postEmployee(input))
			.then(() => {
				const actions = store.getActions();
				expect(actions.length).toEqual(2);
				expect(actions[0]).toEqual(expectedActions[0]);
				expect(actions[1].type).toEqual(expectedActions[1].type);
				expect(actions[1].name).toEqual(expectedActions[1].name);
			})
	})

	test('it should return action with PATCHed employee', () => {
		const input = new Employee({
			name: 'mukidi',
			id: '/employees/50'
		});

		nock('http://localhost:8080')
			.patch('/rms/api/employees/50')
			.reply(200, input);

		const expectedActions = [
			{type: PATCH_EMPLOYEE},
			{
				type: PATCH_EMPLOYEE_SUCCESS,
				...input
			}
		];

		const store = mockStore(rmsApp);
		return store.dispatch(patchEmployee(input))
			.then(() => {
				const actions = store.getActions();
				expect(actions.length).toEqual(2);
				expect(actions[0]).toEqual(expectedActions[0]);
				expect(actions[1].type).toEqual(expectedActions[1].type);
				expect(actions[1].name).toEqual(expectedActions[1].name);
				expect(actions[1].id).toEqual(expectedActions[1].id);
			})
	})
})

