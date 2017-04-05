import Dependant from './Dependant';
import {
	ADD_DEPENDANT,
	CLEAN_DEPENDANTS,
	DELETE_DEPENDANT,
	UPDATE_DEPENDANT
} from './dependantsAction';
import {
	DELETE_DEPENDANT_SUCCESS,
	PATCH_DEPENDANT_SUCCESS,
	POST_DEPENDANT_SUCCESS
} from '../../async/dependant/actions';

function dependants(state=[], action) {
	switch (action.type) {
		case POST_DEPENDANT_SUCCESS:
		case ADD_DEPENDANT:
			return [
				...state,
				new Dependant(action)
			];
		case CLEAN_DEPENDANTS:
			return [];
		case DELETE_DEPENDANT_SUCCESS:
		case DELETE_DEPENDANT:
			return state.filter(item => (
				item.id !== action.id
			));
		case PATCH_DEPENDANT_SUCCESS:
		case UPDATE_DEPENDANT:
			return state.map(item => {
				if (item.id === action.id) {
					const newDep = new Dependant({
						...item,
						...action
					})
					return newDep;
				}
				return item;
			})
		default:
			return state;
	}
}

export default dependants;