import Location from './Location';

test('create empty Location', () => {
	const result = new Location({});
	const expected = {
		branchOffice: '',
		startDate: new Date('1927-09-09'),
		endDate: new Date('1927-09-09'),
		employeeId: '',
		activeInd: false
	};

	expect(result.id).toBeDefined();
	expect(result.branchOffice).toEqual(expected.branchOffice);
	expect(result.startDate).toEqual(expected.startDate);
	expect(result.endDate).toEqual(expected.endDate);
	expect(result.employeeId).toEqual(expected.employeeId);
	expect(result.activeInd).toEqual(expected.activeInd);
});

test('create Location w/ data', () => {
	const input = {
		branchOffice: 'Bali',
		startDate: new Date('2016-01-04'),
		endDate: new Date('2017-12-04'),
		employeeId: 'asdf',
		activeInd: true
	};
	const result = new Location(input);
	const expected = {
		branchOffice: 'Bali',
		startDate: new Date('2016-01-04'),
		endDate: new Date('2017-12-04'),
		employeeId: 'asdf',
		activeInd: true
	};

	expect(result.id).toBeDefined();
	expect(result.branchOffice).toEqual(expected.branchOffice);
	expect(result.startDate).toEqual(expected.startDate);
	expect(result.endDate).toEqual(expected.endDate);
	expect(result.employeeId).toEqual(expected.employeeId);
	expect(result.activeInd).toEqual(expected.activeInd);
})