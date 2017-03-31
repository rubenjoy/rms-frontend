import Employee from './Employee';
// TODO create test first, employee should return empty employee only
/** 
 *  employee ID should be auto generated
 **/
test('create empty employee, except id', () => {
	const result = new Employee({id: 1});
	const expected = {
		name:'',
		activeInd: false,
		phone: '',
		jobFamily: '',
		jobTitle: '',
		stream: '',
		businessUnit: '',
		hireDate: new Date('1927-09-09'),
		location: '',
		id: 1
	}
	expect(result.name).toEqual(expected.name);
	expect(result.activeInd).toEqual(expected.activeInd);
	expect(result.phone).toEqual(expected.phone);
	expect(result.jobFamily).toEqual(expected.jobFamily);
	expect(result.jobTitle).toEqual(expected.jobTitle);
	expect(result.stream).toEqual(expected.stream);
	expect(result.businessUnit).toEqual(expected.businessUnit);
	expect(result.hireDate).toEqual(expected.hireDate);
	expect(result.location).toEqual(expected.location);
	expect(result.id === null).toEqual(false);
	expect(result.id).toEqual(1);
});

test('create non-empty employee', () => {
	const empData = {
		id: 2,
		name:'Mukidi',
		activeInd: true,
		phone: '0821657984',
		jobFamily: 'SQ',
		jobTitle: 'JT',
		stream: 'CDC',
		businessUnit: 'Selenium',
		hireDate: new Date('2017-01-03'),
		location: 'Bali' 	
	};
	const result = new Employee(empData);
	const expected = {
		id: 2,
		name:'Mukidi',
		activeInd: true,
		phone: '0821657984',
		jobFamily: 'SQ',
		jobTitle: 'JT',
		stream: 'CDC',
		businessUnit: 'Selenium',
		hireDate: new Date('2017-01-03'),
		location: 'Bali' 	
	}

	expect(result.name).toEqual(expected.name);
	expect(result.activeInd).toEqual(expected.activeInd);
	expect(result.phone).toEqual(expected.phone);
	expect(result.jobFamily).toEqual(expected.jobFamily);
	expect(result.jobTitle).toEqual(expected.jobTitle);
	expect(result.stream).toEqual(expected.stream);
	expect(result.businessUnit).toEqual(expected.businessUnit);
	expect(result.hireDate).toEqual(expected.hireDate);
	expect(result.location).toEqual(expected.location);
	expect(result.id).toEqual(expected.id);
})

test('create employee with extended data', () => {
	const empData = {
		name: 'Diandra Klaus',
		activeInd: true,
		phone: '+861234567',
		jobFamily: 'SE',
		jobTitle: 'PG',
		stream: 'CDC',
		businessUnit: 'AsteRX',
		hireDate: new Date('2015-01-02'),
		location: 'Bali',
		id: 1
	};
	const result = new Employee(empData);
	const expected = {
		name: 'Diandra Klaus',
		activeInd: true,
		phone: '+861234567',
		jobFamily: 'SE',
		jobTitle: 'PG',
		stream: 'CDC',
		businessUnit: 'AsteRX',
		hireDate: new Date('2015-01-02'),
		location: 'Bali'
	};

	expect(result.name).toEqual(expected.name);
	expect(result.activeInd).toEqual(expected.activeInd);
	expect(result.phone).toEqual(expected.phone);
	expect(result.jobTitle).toEqual(expected.jobTitle);
	expect(result.jobFamily).toEqual(expected.jobFamily);
	expect(result.stream).toEqual(expected.stream);
	expect(result.businessUnit).toEqual(expected.businessUnit);
	expect(result.hireDate).toEqual(expected.hireDate);
	expect(result.location).toEqual(expected.location);
})

test('Employee constructor without ID, should throw error', () => {
	const empData = {
		name: 'Bunga Citra Lestari',
		activeInd: true,
		hireDate: new Date('2017-01-03'),
		jobFamily: 'SE',
		jobTitle: 'JP',
		stream: 'Service',
		businessUnit: 'BTPN',
		location: 'lombok'
	};
	const expectedError = "empty ID not allowed";
	expect(() => {
		new Employee(empData)
	}).toThrow(expectedError);
})