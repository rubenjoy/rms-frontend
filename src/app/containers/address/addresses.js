import Address from './Address';
import {
	ADD_ADDRESS,
	DELETE_ADDRESS,
	UPDATE_ADDRESS,
	CLEAN_ADDRESS
} from './addressesAction';
import {
	DELETE_ADDRESS_SUCCESS,
	PATCH_ADDRESS_SUCCESS,
	POST_ADDRESS_SUCCESS
} from '../../async/address/actions';

function addresses(state = [], action) {
	switch (action.type) {
		case POST_ADDRESS_SUCCESS:
		case ADD_ADDRESS:
			return [
				...state,
				new Address(action)
			];
		case DELETE_ADDRESS_SUCCESS:
		case DELETE_ADDRESS:
			return state.filter(item =>
					(item.id !== action.id)
				);
		case PATCH_ADDRESS_SUCCESS:
		case UPDATE_ADDRESS:
			return state.map(item =>
					(item.id === action.id ?
						new Address({
							...item,
							...action
						}) :
						item
					)
				);
		case CLEAN_ADDRESS:
			return [];
		default: 
			return state;
	}
}

export default addresses;