import Location from './Location';

function locations(state = [], action) {
	switch (action.type) {
		case 'ADD_LOCATION':
			return [
				...state,
				new Location(action)
			];
		case 'DELETE_LOCATION':
			return state.filter(item =>
				(item.id !== action.id)
			);
		case 'UPDATE_LOCATION':
			return state.map(item => {
				if (item.id === action.id) {
					return new Location({
						...item,
						...action
					});
				}
				return item;
			});
		default:
			return state;
	}
}

export default locations;