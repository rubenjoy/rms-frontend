import {
	GET_ADDRESSES,
	GET_ADDRESSES_SUCCESS,
	GET_ADDRESSES_FAIL,
	POST_ADDRESS,
	POST_ADDRESS_FAIL,
	PATCH_ADDRESS,
	PATCH_ADDRESS_FAIL,
	DELETE_ADDRESS_ASYNC,
	DELETE_ADDRESS_FAIL
} from './actions';
import Address from '../../containers/address/Address';

export const addresses = (state = [], action) => {
	switch (action.type) {
		case GET_ADDRESSES:
		case POST_ADDRESS:
		case PATCH_ADDRESS:
		case DELETE_ADDRESS_ASYNC:
			return state; // fetchStatus store
		case GET_ADDRESSES_FAIL:
		case POST_ADDRESS_FAIL:
		case PATCH_ADDRESS_FAIL:
		case DELETE_ADDRESS_FAIL:
			return state; // fetchStatus store
		case GET_ADDRESSES_SUCCESS: {
			let existingIds = state
				.filter(address => address.id !== undefined)
				.map(address => address.id);
			let addresses = [...state];
			action.addresses.forEach(address => {
				if (existingIds.indexOf(address.id) < 0) {
					addresses.push(new Address({
						...address, employeeId: address.id
					}));
					existingIds.push(address.id);
				}
			})
			return addresses;
		}
		default:
			return state;
	}
}