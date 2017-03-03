import {addAddress,
		modifyAddress,
		removeAddress} from './addressesAction';
import Address from './Address';
import addresses from './addresses';

test('add address to empty store', () => {
	const initial = [];
	const input = new Address({
		id: '1234',
		employeeId: 'asdf',
		address: 'Jl. Surya Sumantri no 23',
		activeInd: true
	})
	const action = addAddress(input);
	const result = addresses(initial, action);
	const expected = [{
		id: '1234',
		employeeId: 'asdf',
		address: 'Jl. Surya Sumantri no 23',
		activeInd: true
	}];

	expect(result).toEqual(expected);
})

test('remove address from store', () => {
	const initial = [{
		id: '1234',
		employeeId: 'asdf',
		address: 'Jl. Surya Sumantri no 23',
		activeInd: true
	}];
	const input = '1234';
	const action = removeAddress(input);
	const result = addresses(initial, action);
	const expected = [];

	expect(result).toEqual(expected);
})

test('modify address in store', () => {
	const initial = [{
		id: '1234',
		employeeId: 'asdf',
		address: 'Jl. Surya Sumantri no 23',
		activeInd: true
	}];
	const input = {
		id: '1234',
		address: 'Jl. Bypass Ngurah Rai'
	};
	const action = modifyAddress(input);
	const result = addresses(initial, action);
	const expected = [{
		id: '1234',
		employeeId: 'asdf',
		address: 'Jl. Bypass Ngurah Rai',
		activeInd: true
	}];

	expect(result).toEqual(expected);
})