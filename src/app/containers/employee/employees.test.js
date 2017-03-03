import employees from './employees';
import {modifyEmployee} from './employeesAction';

// TODO test for not empty employees or more than 1 employee
// TODO negative test

test('add employee to empty', ()=> {
	const emptyEmployees = [];
	const action = {
		id: 1,
		type: 'ADD_EMPLOYEE',
		name: 'mukidi',
		activeInd: true,
		phone: '0815123456',
		jobFamily: 'SE',
		jobTitle: 'PG',
		stream: 'CDC',
		businessUnit: 'Ruby',
		hireDate: new Date('2017-01-03'),
		location: 'Bali'
	};
	const finalEmployees = [{
		id: 1,
		name: 'mukidi',
		activeInd: true,
		phone: '0815123456',
		jobFamily: 'SE',
		jobTitle: 'PG',
		stream: 'CDC',
		businessUnit: 'Ruby',
		hireDate: new Date('2017-01-03'),
		location: 'Bali',
		birthDate: new Date('1927-09-09'),
		division: 0,	
		email: '',
		employmentStatus:'',
		gender: 0,
		maritalStatus: 0,
		nationality: 0,
		suspendDate: new Date('1927-09-09'),
	}];
	const result = employees(emptyEmployees, action);
	
	expect(result).toEqual(finalEmployees);
	expect(result).not.toBe(emptyEmployees);
});

test('toggle employee activeInd', () => {
	const initialEmployees = [{
		id: 1,
		name: 'mukidi',
		activeInd: true,
		phone: '0815123456',
		jobFamily: 'SE',
		jobTitle: 'PG',
		stream: 'CDC',
		businessUnit: 'Ruby',
		hireDate: new Date('2017-01-03'),
		location: 'Lombok'
	}];
	const action = {
		type: 'TOGGLE_EMPLOYEE',
		id: 1
	};
	const finalEmployees = [{
		id: 1,
		name: 'mukidi',
		activeInd: false,
		phone: '0815123456',
		jobFamily: 'SE',
		jobTitle: 'PG',
		stream: 'CDC',
		businessUnit: 'Ruby',
		hireDate: new Date('2017-01-03'),
		location: 'Lombok'
	}];
	const result = employees(initialEmployees, action);

	expect(result).toEqual(finalEmployees);
	expect(result).not.toBe(initialEmployees);
});

test('delete employee', () => {
	const initialEmployees = [{
		id: 1,
		name: 'mukidi',
		activeInd: true,
		phone: '0815123456',
		jobFamily: 'SE',
		jobTitle: 'PG',
		stream: 'CDC',
		businessUnit: 'Ruby',
		hireDate: new Date('2017-01-03'),
		location: 'Lombok'
	}];
	const action = {
		type: 'DELETE_EMPLOYEE',
		id: 1
	};
	const finalEmployees = [];
	const result = employees(initialEmployees, action);

	expect(result).toEqual(finalEmployees);
	expect(result).not.toBe(initialEmployees);
})

test('modify employee in store', () => {
	const initialStore = [{
		id: 1,
		name: 'mukidi',
		activeInd: true,
		phone: '0815123456',
		jobFamily: 'SE',
		jobTitle: 'PG',
		stream: 'CDC',
		businessUnit: 'Ruby',
		hireDate: new Date('2017-01-03'),
		birthDate: new Date('1989-10-01'),
		suspendDate: new Date('2019-12-24'),
		division: 0,
		email: 'zee.avi@mitrais.com',
		employmentStatus: 'contract',
		gender: 1,
		maritalStatus: 1, 
		nationality: 0,
	}];
	const input = {
		id: 1,
		name: 'Zee Avi',
		phone: '+628123456',
		location: 'Lombok'
	};
	const action = modifyEmployee(input);
	const result = employees(initialStore, action);
	const expected = [{
		id: 1,
		name: 'Zee Avi',
		activeInd: true,
		phone: '+628123456',
		jobFamily: 'SE',
		jobTitle: 'PG',
		stream: 'CDC',
		businessUnit: 'Ruby',
		hireDate: new Date('2017-01-03'),
		birthDate: new Date('1989-10-01'),
		suspendDate: new Date('2019-12-24'),
		division: 0,
		email: 'zee.avi@mitrais.com',
		employmentStatus: 'contract',
		gender: 1,
		maritalStatus: 1, 
		nationality: 0,
		location: 'Lombok'
	}];

	expect(result).toEqual(expected);
})