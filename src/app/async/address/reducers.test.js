import {
	GET_ADDRESSES_SUCCESS
} from './actions';
import {
	addresses
} from './reducers';

test('Action GET_ADDRESSES_SUCCESS', () => {
	const emptyState = [];
	const action = {
		type: GET_ADDRESSES_SUCCESS,
		addresses: [{
			address: 'Jalan',
			activeInd: true,
			id: '/employees/50/address/50'
		}]
	};
	const result = addresses(emptyState, action);
	const expected = [{
		address: 'Jalan',
		activeInd: true,
		employeeId: '/employees/50/address/50',
		id: '/employees/50/address/50'
	}];

	expect(result).toEqual(expected);
})