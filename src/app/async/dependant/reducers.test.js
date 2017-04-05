import {
	DELETE_DEPENDANT_SUCCESS,
	GET_DEPENDANTS_SUCCESS,
	PATCH_DEPENDANT_SUCCESS,
	POST_DEPENDANT_SUCCESS
} from './actions';
import {dependants as asyncReducer} from './reducers';
import dependants from '../../containers/dependant/dependants';

test('dispatch GET dependants', () =>{
	const action = {
		type: GET_DEPENDANTS_SUCCESS,
		dependants: [{
			name: 'Mukidi',
			gender: 'Male',
			relation: 'Son',
			birthDate: '2011-05-19',
			activeInd: true,
			id: '/employees/50/dependents/50'
		}]
	}
	const expected = [{
		name: 'Mukidi',
		gender: 'Male',
		relation: 'Son',
		birthDate: '2011-05-19',
		activeInd: true,
		id: '/employees/50/dependents/50',
		employeeId: '/employees/50/dependents/50'
	}]
	const result = asyncReducer([], action);

	expect(result).toEqual(expected);
})

test('dispatch POST dependant', () =>{
	const dependant = {
		name: 'Mukidi',
		gender: 'Male',
		relation: 'Son',
		birthDate: '2011-05-19',
		activeInd: true,
		employeeId: '/employees/50/dependents/50',
		id: '/employees/50/dependents/50'
	}
	const action = {
		type: POST_DEPENDANT_SUCCESS,
		...dependant
	}
	const expected = [{
		name: 'Mukidi',
		gender: 'Male',
		relation: 'Son',
		birthDate: '2011-05-19',
		activeInd: true,
		id: '/employees/50/dependents/50',
		employeeId: '/employees/50/dependents/50'
	}]
	const result = dependants([], action);

	expect(result).toEqual(expected);
})

test('dispatch PATCH dependant', () =>{
	const initial = [{
		name: 'Mary Jane',
		gender: 'Female',
		relation: 'Daughter',
		birthDate: '2011-05-19',
		activeInd: true,
		employeeId: '/employees/50/dependents/50',
		id: '/employees/50/dependents/50'
	}]
	const dependant = {
		name: 'Mukidi',
		gender: 'Male',
		relation: 'Son',
		birthDate: '2011-05-19',
		activeInd: true,
		employeeId: '/employees/50/dependents/50',
		id: '/employees/50/dependents/50'
	}
	const action = {
		type: PATCH_DEPENDANT_SUCCESS,
		...dependant
	}
	const expected = [{
		name: 'Mukidi',
		gender: 'Male',
		relation: 'Son',
		birthDate: '2011-05-19',
		activeInd: true,
		employeeId: '/employees/50/dependents/50',
		id: '/employees/50/dependents/50'
	}]
	const result = dependants(initial, action);

	expect(result.length).toEqual(expected.length);
	expect(result[0].name).not.toEqual('Mary Jane');
	expect(result[0].gender).not.toEqual('Female');
	expect(result[0].relation).not.toEqual('Daughter');
})

test('dispatch DELETE dependant', () =>{
	const initial = [{
		name: 'Mary Jane',
		gender: 'Female',
		relation: 'Daughter',
		birthDate: '2011-05-19',
		activeInd: true,
		employeeId: '/employees/50/dependents/50',
		id: '/employees/50/dependents/50'
	}]
	const action = {
		type: DELETE_DEPENDANT_SUCCESS,
		id: '/employees/50/dependents/50'
	}
	const expected = [];
	const result = dependants(initial, action);

	expect(result).toEqual(expected);
})