import Dependant from './Dependant';

test('create empty Dependant', () => {
	const result = new Dependant({});
	const expected = {
		relation: 0,
		name: '',
		birthDate: new Date('1927-09-09'),
		activeInd: false,
		employeeId: '',
		gender: 0
	};

	expect(result.id).toBeDefined();
	expect(result.type).toEqual(expected.type);
	expect(result.name).toEqual(expected.name);
	expect(result.birthDate).toEqual(expected.birthDate);
	expect(result.activeInd).toEqual(expected.activeInd);
	expect(result.employeeId).toEqual(expected.employeeId);
	expect(result.gender).toEqual(expected.gender);
});

test('create non empty Dependant', () => {
	const input = {
		id: 'qwer',
		relation: 1,
		name: 'Zee Avi',
		birthDate: new Date('1989-10-01'),
		activeInd: true,
		employeeId: 'asdf',
		gender: 1
	};
	const result = new Dependant(input);
	const expected = {
		id: 'qwer',
		relation: 1,
		name: 'Zee Avi',
		birthDate: new Date('1989-10-01'),
		activeInd: true,
		employeeId: 'asdf',
		gender: 1
	};

	expect(result).toEqual(expected);
});