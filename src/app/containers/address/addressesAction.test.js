import {addAddress,
		modifyAddress,
		removeAddress} from './addressesAction';
import Address from './Address';

test('create addAddress action', () => {
	const input = new Address({
		address: 'Jln. Surya Sumantri No. 23',
		activeInd: true,
		employeeId: 'asdf',
		id: '1234'
	});
	const result = addAddress(input);
	const expected = {
		type: 'ADD_ADDRESS',
		address: 'Jln. Surya Sumantri No. 23',
		activeInd: true,
		employeeId: 'asdf',
		id: '1234'
	};

	expect(result).toEqual(expected);
});

test('create modifyAddress action', () => {
	const input = {
		address: 'Jln. Bypass Ngurah Rai Suwung',
		employeeId: 'asdf'
	};
	const result = modifyAddress(input);
	const expected = {
		type: 'UPDATE_ADDRESS',
		address: 'Jln. Bypass Ngurah Rai Suwung',
		employeeId: 'asdf'	
	};

	expect(result).toEqual(expected);
})

test('create removeAddress action', () => {
	const input = 'asdf';
	const result = removeAddress(input);
	const expected = {
		type: 'DELETE_ADDRESS',
		id: 'asdf'
	};

	expect(result).toEqual(expected);
})