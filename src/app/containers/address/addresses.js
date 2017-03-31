import Address from './Address';

function addresses(state = [], action) {
	switch (action.type) {
		case 'ADD_ADDRESS':
			return [
				...state,
				new Address(action)
			];
		case 'DELETE_ADDRESS':
			return state.filter(item =>
					(item.id !== action.id)
				);
		case 'UPDATE_ADDRESS':
			return state.map(item =>
					(item.id === action.id ?
						new Address({
							...item,
							...action
						}) :
						item
					)
				);
		case 'CLEAN_ADDRESS':
			return [];
		default: 
			return state;
	}
}

export default addresses;