import Dependant from './Dependant';

function dependants(state=[], action) {
	switch (action.type) {
		case 'ADD_DEPENDANT':
			return [
				...state,
				new Dependant(action)
			];
		case 'CLEAN_DEPENDANTS':
			return [];
		case 'DELETE_DEPENDANT':
			return state.filter(item => (
				item.id !== action.id
			));
		case 'UPDATE_DEPENDANT':
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