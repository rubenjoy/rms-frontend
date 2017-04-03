import Employee from './Employee';
import {
	ADD_EMPLOYEE,
	DELETE_EMPLOYEE,
	TOGGLE_EMPLOYEE,
	UPDATE_EMPLOYEE
} from './employeesAction';

const employees = (state = [], action) => {
	switch (action.type) {
		case ADD_EMPLOYEE:
			return [...state, new Employee(action)];
		case TOGGLE_EMPLOYEE:
			return state.map((item) => {
				if (item.id === action.id) {
					return {...item, activeInd: !item.activeInd};
				}
				return item;
			});
		case DELETE_EMPLOYEE:
			return state.filter((item) => {
				return item.id !== action.id;
			});
		case UPDATE_EMPLOYEE:
			return state.map((item) => {
				if (item.id === action.id) {
					return new Employee({
						...item, ...action
					});
				}
				return item;
			})
		default:
			return state;
	}
};

export default employees;