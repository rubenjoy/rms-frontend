import Address from './Address';

test('create empty address', () => {
	const result = new Address({});
	const expected = {
		address: '',
		activeInd: false,
		employeeId: ''
	};

	expect(result.address).toEqual(expected.address);
	expect(result.activeInd).toEqual(expected.activeInd);
	expect(result.employeeId).toEqual(expected.employeeId);
	expect(result.id).toBeDefined();
});

test('create Address with partial data', () => {
	const input = {
		address: 'Jl. Surya Sumantri Bandung',
		activeInd: true,
		employeeId: 'asdf'
	}
	const result = new Address(input);
	const expected = {
		address: 'Jl. Surya Sumantri Bandung',
		activeInd: true,
		employeeId: 'asdf'
	}

	expect(result.address).toEqual(expected.address);
	expect(result.activeInd).toEqual(expected.activeInd);
	expect(result.employeeId).toEqual(expected.employeeId);
	expect(result.id).toBeDefined();
})

test('create Address with id', () => {
	const input = {
		address: 'Jl. Surya Sumantri Bandung',
		activeInd: true,
		employeeId: 'zxcv',
		id: 'qwer'
	}
	const result = new Address(input);
	const expected = {
		address: 'Jl. Surya Sumantri Bandung',
		activeInd: true,
		employeeId: 'zxcv',
		id: 'qwer'	
	}
	expect(result).toEqual(expected);
})