import Grade from './Grade';

test('create empty Grade', () => {
	const result = new Grade({});
	const expected = {
		startDate: new Date('1927-09-09'),
		endDate: new Date('1927-09-09'),
		grade: 0,
		devStage: 0,
		employeeId: ''
	};

	expect(result.id).toBeDefined();
	expect(result.startDate).toEqual(expected.startDate);
	expect(result.endDate).toEqual(expected.endDate);
	expect(result.grade).toEqual(expected.grade);
	expect(result.devStage).toEqual(expected.devStage);
	expect(result.employeeId).toEqual(expected.employeeId);
});

test('create Grade w/ data', () => {
	const input = {
		startDate: new Date('2016-01-04'),
		endDate: new Date('2017-01-05'),
		grade: 1,
		devStage: 9,
		employeeId: 'asdf'	
	};
	const result = new Grade(input);
	const expected = {
		startDate: new Date('2016-01-04'),
		endDate: new Date('2017-01-05'),
		grade: 1,
		devStage: 9,
		employeeId: 'asdf'		
	};

	expect(result.id).toBeDefined();
	expect(result.startDate).toEqual(expected.startDate);
	expect(result.endDate).toEqual(expected.endDate);
	expect(result.grade).toEqual(expected.grade);
	expect(result.devStage).toEqual(expected.devStage);
	expect(result.employeeId).toEqual(expected.employeeId);
});