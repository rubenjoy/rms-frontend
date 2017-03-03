import {buildEmployee, createEmp} from './empAction';
import Emp from './Emp';

test('createEmp action', () => {
	const emp = new Emp({
		firstName: 'David',
		lastName: 'Guetta',
		gender: 0,
		birthDate: new Date('1982-10-02'),
		nationality: 1,
		maritalStatus: 0,
		phone: '+62815123456',
		subDivision: 'AsteRX',
		status: 'Bali based service',
		suspendDate: new Date('2017-01-01'),
		hireDate: new Date('2016-12-12'),
		grade: 0,
		division: 0,
		email: 'david@mitrais.com'
	});
	const result = createEmp(emp);
	const expected = {
		type: 'CREATE_EMP',
		firstName: 'David',
		lastName: 'Guetta',
		gender: 0,
		birthDate: new Date('1982-10-02'),
		nationality: 1,
		maritalStatus: 0,
		phone: '+62815123456',
		subDivision: 'AsteRX',
		status: 'Bali based service',
		suspendDate: new Date('2017-01-01'),
		hireDate: new Date('2016-12-12'),
		grade: 0,
		division: 0,
		email: 'david@mitrais.com',
		id: ''		
	}

	expect(result).toEqual(expected);
});

test('buildEmployee action', () => {
	const emp = new Emp({
		firstName: 'David',
		lastName: 'Guetta',
		gender: 0,
		birthDate: new Date('1982-10-02'),
		nationality: 1,
		maritalStatus: 0,
		phone: '+62815123456',
		subDivision: 'AsteRX',
		status: 'Bali based service',
		suspendDate: new Date('2017-01-01'),
		hireDate: new Date('2016-12-12'),
		grade: 0,
		division: 0,
		email: 'david@mitrais.com'
	});
	const result = buildEmployee(emp);
	const expected = {
		type: 'BUILD_EMPLOYEE',
		firstName: 'David',
		lastName: 'Guetta',
		gender: 0,
		birthDate: new Date('1982-10-02'),
		nationality: 1,
		maritalStatus: 0,
		phone: '+62815123456',
		subDivision: 'AsteRX',
		status: 'Bali based service',
		suspendDate: new Date('2017-01-01'),
		hireDate: new Date('2016-12-12'),
		grade: 0,
		division: 0,
		email: 'david@mitrais.com',
		id: ''		
	}

	expect(result).toEqual(expected);
});