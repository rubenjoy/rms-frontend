import {employees} from './reducers';
import {GET_EMPLOYEES_SUCCESS} from './actions';

import Employee from '../../containers/employee/Employee';

test('get employees success will return list contains employees', () => {
	const emptyState = [];
	const data = [
		new Employee({
			name: 'Michael Jacob Hutapea',
			id: '/employees/50',
			gender: 'MALE',
			nationality: 'SINGAPOREAN'
		}),
	];
	const action = {
		type: GET_EMPLOYEES_SUCCESS,
		employees: data	
	};

	const result = employees(emptyState, action);

	expect(result.length).toEqual(1);
	expect(result[0]['name']).toEqual('Michael Jacob Hutapea');
	expect(result[0]['id']).toEqual('/employees/50');
	expect(result[0]['gender']).toEqual('MALE');
})

test('get employees with duplicate id', () => {
	const emptyState = [];
	const data = [
		new Employee({
			name: 'Michael Jacob Hutapea',
			id: '/employees/50',
			gender: 'MALE',
			nationality: 'SINGAPOREAN'
		}),
		new Employee({
			name: 'Mary Jane',
			id: '/employees/50'
		})
	];
	const action = {
		type: GET_EMPLOYEES_SUCCESS,
		employees: data	
	};

	const result = employees(emptyState, action);

	expect(result.length).toEqual(1);
	expect(result[0]['name']).toEqual('Michael Jacob Hutapea');
	expect(result[0]['id']).toEqual('/employees/50');
	expect(result[0]['gender']).toEqual('MALE');
})