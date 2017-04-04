import {
	GET_EMPLOYEES,
	GET_EMPLOYEES_SUCCESS,
	GET_EMPLOYEES_FAIL,
	POST_EMPLOYEE,
	POST_EMPLOYEE_FAIL,
	PATCH_EMPLOYEE,
	PATCH_EMPLOYEE_FAIL
} from './actions';

import Employee from '../../containers/employee/Employee';

export const employees = (state = [], action) => {
	switch (action.type) {
		case GET_EMPLOYEES:
		case POST_EMPLOYEE:
		case PATCH_EMPLOYEE: 
			// TODO display spinner UI
			return state;
		case GET_EMPLOYEES_FAIL:
		case POST_EMPLOYEE_FAIL:
		case PATCH_EMPLOYEE_FAIL: 
			// TODO display error message
			return state;
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