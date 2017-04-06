import {
	GET_EMPLOYEE,
	GET_EMPLOYEE_SUCCESS,
	GET_EMPLOYEE_FAIL,
	GET_EMPLOYEES,
	GET_EMPLOYEES_SUCCESS,
	GET_EMPLOYEES_FAIL,
	PATCH_EMPLOYEE,
	PATCH_EMPLOYEE_SUCCESS,
	PATCH_EMPLOYEE_FAIL,
	POST_EMPLOYEE,
	POST_EMPLOYEE_SUCCESS,
	POST_EMPLOYEE_FAIL
} from './actions';
import {
	createStatusReducer
} from '../fetchStatus';

import Employee from '../../containers/employee/Employee';

export const employees = (state = [], action) => {
	switch (action.type) {
		case GET_EMPLOYEE: {
			const index = state.indexOf(action.id);
			if (index < 0) { // not exists
				return [...state, new Employee(action)];
			}// exists
			return state.map((employee, i) => {
				if (index !== i) {
					return employee;
				}
				return new Employee({
					...employee, ...action
				});
			})
		}
		case GET_EMPLOYEES_SUCCESS: {
			let existingIds = state
				.filter(employee => employee.id !== undefined)
				.map(employee => employee.id);
			let employees = [...state];
			action.employees.forEach(employee => {
				if (existingIds.indexOf(employee.id) < 0) {
					employees.push(new Employee(employee));
					existingIds.push(employee.id);
				}
			})
			return employees;
		}
		default: 
			return state;
	}
}

export const fetchStatus = createStatusReducer(
	[GET_EMPLOYEE, GET_EMPLOYEES, POST_EMPLOYEE, PATCH_EMPLOYEE],
	[GET_EMPLOYEE_SUCCESS, GET_EMPLOYEES_SUCCESS, POST_EMPLOYEE_SUCCESS,
		PATCH_EMPLOYEE_SUCCESS],
	[GET_EMPLOYEE_FAIL, GET_EMPLOYEES_FAIL, POST_EMPLOYEE_FAIL,
		PATCH_EMPLOYEE_FAIL]
);