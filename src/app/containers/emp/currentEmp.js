import Emp from './Emp';

/**
 *  this is currentEmp reducer
 **/
function currentEmp(state = new Emp({
		id: '',
		suspendDate: new Date(),
		hireDate: new Date(),
		birthDate: new Date()
	}), 
	action) {
	switch (action.type) {
		case 'REPLACE_EMP':
			return new Emp(action);
		case 'UPDATE_EMP':
			return new Emp({
				...state,
				...action
			});
		case 'CLEAN_EMP':
			return new Emp({
				hireDate: new Date(),
				suspendDate: new Date(),
				birthDate: new Date()
			});
		default:
			return state;
	}
}

export default currentEmp;