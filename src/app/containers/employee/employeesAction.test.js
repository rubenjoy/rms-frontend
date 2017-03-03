import {addEmployee,
		modifyEmployee,
		toggleEmployee,
		removeEmployee} from './employeesAction';
import Employee from './Employee';
import employees from './employees';

test('employee add action', () => {
	const employee = new Employee({
		id: 1,
		name: 'Bunga Citra Lestari',
		hireDate: new Date('2017-01-03'),
		activeInd: true,
		phone: '0815123456',
		jobFamily: 'SE',
		jobTitle: 'PG',
		stream: 'CDC',
		businessUnit: 'Java Bootcamp',
		location: 'Bandung'
	});
	const result = addEmployee(employee);
	const expected = {
		id: 1,
		name: 'Bunga Citra Lestari',
		hireDate: new Date('2017-01-03'),
		activeInd: true,
		phone: '0815123456',
		jobFamily: 'SE',
		jobTitle: 'PG',
		stream: 'CDC',
		businessUnit: 'Java Bootcamp',
		location: 'Bandung',
		type: 'ADD_EMPLOYEE',
		birthDate: new Date('1927-09-09'),
		division: 0,	
		email: '',
		employmentStatus:'',
		gender: 0,
		maritalStatus: 0,
		nationality: 0,
		suspendDate: new Date('1927-09-09'),
	}

	expect(result).toEqual(expected);
})

test('addEmployee action to empty employees', ()=> {
	const emptyEmployees = [];
	const employee = new Employee({
		id: 1,
		name: 'mukidi',
		activeInd: true,
		phone: '0815123456',
		jobFamily: 'SE',
		jobTitle: 'PG',
		stream: 'CDC',
		businessUnit: 'Ruby',
		hireDate: new Date('2017-01-03'),
		location: 'Bali'
	})
	const action = addEmployee(employee);
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

test('toggleEmployee action for only 1 employees', () => {
	const initialEmployees = [{
		id: 1,
		name: 'mukidi',
		activeInd: false,
		phone: '0815123456',
		jobFamily: 'SE',
		jobTitle: 'PG',
		stream: 'CDC',
		businessUnit: 'Ruby',
		hireDate: new Date('2017-01-03'),
		location: 'Bali'	
	}];
	const action = toggleEmployee(1);
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
		location: 'Bali'	
	}]
	const result = employees(initialEmployees, action);

	expect(result).toEqual(finalEmployees);
	expect(result).not.toBe(initialEmployees);
})

test('removeEmployee action from only 1 employees', () => {
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
		location: 'Bali'	
	}];
	const action = removeEmployee(1);
	const finalEmployees = [];
	const result = employees(initialEmployees, action);

	expect(result).toEqual(finalEmployees);
	expect(result).not.toBe(initialEmployees);
});

test('create modifyEmployee action', () => {
	const input = {
		id: 1,
		name: 'Zee Avi'
	}
	const result = modifyEmployee(input);
	const expected = {
		type: 'UPDATE_EMPLOYEE',
		id: 1,
		name: 'Zee Avi'
	};

	expect(result).toEqual(expected);
})