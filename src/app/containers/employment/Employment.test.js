import Employment from './Employment';

test('create empty Employment', () => {
	const result = new Employment({});
	const expected = {
		startDate: new Date('1927-09-09'), 
		endDate: new Date('1927-09-09'),
		employer: '',
		jobTitle: '',
		activeInd: false,		
		employeeId: '',
		jobDesc: []
	};

	expect(result.id).toBeDefined();
	expect(result.startDate).toEqual(expected.startDate);
	expect(result.endDate).toEqual(expected.endDate);
	expect(result.employer).toEqual(expected.employer);
	expect(result.jobDesc).toEqual(expected.jobDesc);
	expect(result.activeInd).toEqual(expected.activeInd);
	expect(result.employeeId).toEqual(expected.employeeId);
});

test('create Employement w/ data', () => {
	const input = {
		startDate: new Date('2014-01-04'),
		endDate: new Date('2015-12-01'),
		employer: 'Geekseat',
		jobDesc: 'dotnet programmer',
		activeInd: true,
		employeeId: 'asdf'
	};
	const result = new Employment(input);
	const expected = {
		startDate: new Date('2014-01-04'),
		endDate: new Date('2015-12-01'),
		employer: 'Geekseat',
		jobDesc: 'dotnet programmer',
		activeInd: true,
		employeeId: 'asdf'	
	}

	expect(result.id).toBeDefined();
	expect(result.startDate).toEqual(expected.startDate);
	expect(result.endDate).toEqual(expected.endDate);
	expect(result.employer).toEqual(expected.employer);
	expect(result.jobDesc).toEqual(expected.jobDesc);
	expect(result.activeInd).toEqual(expected.activeInd);
	expect(result.employeeId).toEqual(expected.employeeId);
})