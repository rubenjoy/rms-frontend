import {
	GET_EMPLOYEES,
	GET_EMPLOYEES_SUCCESS,
	GET_EMPLOYEES_FAIL,
	POST_EMPLOYEE,
	POST_EMPLOYEE_SUCCES,
	POST_EMPLOYEE_FAIL,
	PATCH_EMPLOYEE,
	PATCH_EMPLOYEE_SUCCESS,
	PATCH_EMPLOYEE_FAIL,
	URL
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
			let employees = [...state];
			action.employees.forEach(employee => {
				employees.push(new Employee(employee));
			})
			// TODO eliminate possibilities of duplicated employee
			return employees;
		}
		case POST_EMPLOYEE_SUCCES:
		case PATCH_EMPLOYEE_SUCCESS: {
			const employee = new Employee(action.employee);
			if (employee.id.toString().match(/^\d$/)) {
				employee.id = URL + '/' + employee.id;
			}
			return [
				...state, 
				employee
			];
		}
		default: 
			return state;
	}
}