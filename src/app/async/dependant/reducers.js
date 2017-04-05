import {
	GET_DEPENDANTS_SUCCESS
} from './actions';
import Dependant from '../../containers/dependant/Dependant';

export const dependants = (state = [], action) => {
	switch (action.type) {
		case GET_DEPENDANTS_SUCCESS: {
			let existingIds = state
				.filter(dependant => dependant.id !== undefined)
				.map(dependant => dependant.id);
			let dependants = [...state];
			action.dependants.forEach(dependant => {
				if (existingIds.indexOf(dependant.id) < 0) {
					dependants.push(new Dependant({
						...dependant, employeeId: dependant.id
					}));
					existingIds.push(dependant.id);
				}
			})
			return dependants;
		}
		default:
			return state;
	}
}