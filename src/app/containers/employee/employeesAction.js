export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const TOGGLE_EMPLOYEE = 'TOGGLE_EMPLOYEE';
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';
export const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE';

const addEmployee = (employee) => {
	return {
		type: 'ADD_EMPLOYEE',
		...employee
	};
}

const toggleEmployee = (id) => ({
	type: 'TOGGLE_EMPLOYEE',
	id
});

const removeEmployee = (id) => ({
	type: 'DELETE_EMPLOYEE',
	id
});

const modifyEmployee = (employee) => ({
	type: 'UPDATE_EMPLOYEE',
	...employee
})

export {addEmployee
	, modifyEmployee
	, toggleEmployee
	, removeEmployee};