import {buildEmployee,emp} from './Emp';
import Emp from './Emp';
import Employee from '../employee/Employee';

test('Create empty Emp', () => {
	const expected = {
		firstName: '',
		lastName: '',
		gender: 0,
		birthDate: new Date('1927-09-09'),
		nationality: 0,
		maritalStatus: 0,
		phone: '',
		subDivision: '',
		status: '',
		suspendDate: new Date('1927-09-09'),
		hireDate: new Date('1927-09-09'),
		grade: 0,
		division: 0,
		email: '',
		id: '',
	};
	let result = new Emp();

	expect(result).toEqual(expected);
});

test('Create non-empty Emp', () => {
	const empData = {
		firstName: 'Michael',
		lastName: 'Jacob',
		gender: 0,
		birthDate: new Date('1972-10-10'),
		nationality: 1,
		maritalStatus: 1,
		phone: '+628562222096',
		subDivision: 'React',
		status: 'Contract',
		suspendDate: new Date('2019-01-02'),
		hireDate: new Date('2017-01-03'),
		grade: 2,
		division: 1,
		email: 'mike.jacob@mitrais.com',
		id: ''
	};
	const result = new Emp(empData);

	expect(result).toEqual(empData);
});

test('Create Emp only with name', () => {
	const empData = {
		firstName: 'Michael',
		lastName: 'Jacob'
	};
	const expected = {
		firstName: 'Michael',
		lastName: 'Jacob',
		gender: 0,
		birthDate: new Date('1927-09-09'),
		nationality: 0,
		maritalStatus: 0,
		phone: '',
		subDivision: '',
		status: '',
		suspendDate: new Date('1927-09-09'),
		hireDate: new Date('1927-09-09'),
		grade: 0,
		division: 0,
		email: '',
		id: ''
	};
	const result = new Emp(empData);

	expect(result).toEqual(expected);
});

test('build Employee from Emp w/o id', () => {
	const emp = new Emp({
		firstName: 'Michael',
		lastName: 'Jacob',
		gender: 0,
		birthDate: new Date('1972-10-10'),
		nationality: 1,
		maritalStatus: 1,
		phone: '+628562222096',
		subDivision: 'React',
		status: 'Contract',
		suspendDate: new Date('2019-01-02'),
		hireDate: new Date('2017-01-03'),
		grade: 2,
		division: 1,
		email: 'mike.jacob@mitrais.com',
	});
	const result = buildEmployee(emp);
	const expected = new Employee({
		name: 'Michael Jacob',
		gender: 0,
		birthDate: new Date('1972-10-10'),
		nationality: 1,
		maritalStatus: 1,
		phone: '+628562222096',
		employmentStatus: 'Contract',
		suspendDate: new Date('2019-01-02'),
		hireDate: new Date('2017-01-03'),
		grade: 2,
		division: 1,
		email: 'mike.jacob@mitrais.com',
		jobFamily: 'SE',
		jobTitle: 'PG',
		id: 'undefined'
	})

	expect(result.name).toEqual(expected.name);
	expect(result.gender).toEqual(expected.gender);
	expect(result.birthDate).toEqual(expected.birthDate);
	expect(result.suspendDate).toEqual(expected.suspendDate);
	expect(result.hireDate).toEqual(expected.hireDate);
	expect(result.nationality).toEqual(expected.nationality);
	expect(result.maritalStatus).toEqual(expected.maritalStatus);
	expect(result.phone).toEqual(expected.phone);
	expect(result.employmentStatus).toEqual(expected.employmentStatus);
	expect(result.grade).toEqual(expected.grade);
	expect(result.division).toEqual(expected.division);
	expect(result.email).toEqual(expected.email);
});

test('build Employee w/ id', () => {
	const emp = new Emp({
		firstName: 'Michael',
		lastName: 'Jacob',
		gender: 0,
		birthDate: new Date('1972-10-10'),
		nationality: 1,
		maritalStatus: 1,
		phone: '+628562222096',
		subDivision: 'React',
		status: 'Contract',
		suspendDate: new Date('2019-01-02'),
		hireDate: new Date('2017-01-03'),
		grade: 2,
		division: 1,
		email: 'mike.jacob@mitrais.com',
		id: '1A'
	});
	const result = buildEmployee(emp);
	const expected = new Employee({
		name: 'Michael Jacob',
		gender: 0,
		birthDate: new Date('1972-10-10'),
		nationality: 1,
		maritalStatus: 1,
		phone: '+628562222096',
		employmentStatus: 'Contract',
		suspendDate: new Date('2019-01-02'),
		hireDate: new Date('2017-01-03'),
		grade: 2,
		division: 1,
		email: 'mike.jacob@mitrais.com',
		id: '1A',
	})

	expect(result.name).toEqual(expected.name);
	expect(result.gender).toEqual(expected.gender);
	expect(result.birthDate).toEqual(expected.birthDate);
	expect(result.suspendDate).toEqual(expected.suspendDate);
	expect(result.hireDate).toEqual(expected.hireDate);
	expect(result.nationality).toEqual(expected.nationality);
	expect(result.maritalStatus).toEqual(expected.maritalStatus);
	expect(result.phone).toEqual(expected.phone);
	expect(result.employmentStatus).toEqual(expected.employmentStatus);
	expect(result.grade).toEqual(expected.grade);
	expect(result.division).toEqual(expected.division);
	expect(result.email).toEqual(expected.email);	
})

test('build Employee using emp reducer', () => {
	const amp = new Emp({
		firstName: 'Michael',
		lastName: 'Jacob',
		gender: 0,
		birthDate: new Date('1972-10-10'),
		nationality: 1,
		maritalStatus: 1,
		phone: '+628562222096',
		subDivision: 'React',
		status: 'Contract',
		suspendDate: new Date('2019-01-02'),
		hireDate: new Date('2017-01-03'),
		grade: 2,
		division: 1,
		email: 'mike.jacob@mitrais.com'
	});
	const action = {
		type: 'BUILD_EMPLOYEE',
		...amp
	}
	const result = emp(undefined, action);
	const expected = new Employee({
		name: 'Michael Jacob',
		gender: 0,
		birthDate: new Date('1972-10-10'),
		nationality: 1,
		maritalStatus: 1,
		phone: '+628562222096',
		employmentStatus: 'Contract',
		suspendDate: new Date('2019-01-02'),
		hireDate: new Date('2017-01-03'),
		grade: 2,
		division: 1,
		email: 'mike.jacob@mitrais.com',
		id: 'undefined'
	});

	expect(result.name).toEqual(expected.name);
	expect(result.gender).toEqual(expected.gender);
	expect(result.birthDate).toEqual(expected.birthDate);
	expect(result.suspendDate).toEqual(expected.suspendDate);
	expect(result.hireDate).toEqual(expected.hireDate);
	expect(result.nationality).toEqual(expected.nationality);
	expect(result.maritalStatus).toEqual(expected.maritalStatus);
	expect(result.phone).toEqual(expected.phone);
	expect(result.employmentStatus).toEqual(expected.employmentStatus);
	expect(result.grade).toEqual(expected.grade);
	expect(result.division).toEqual(expected.division);
	expect(result.email).toEqual(expected.email);
});