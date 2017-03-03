import {replaceEmp} from './currentEmpAction';
import {cleanEmp} from './currentEmpAction';
import {modifyEmp} from './currentEmpAction';
import Emp from './Emp';

test('create replace emp action', () => {
	const input = new Emp({
		firstName: 'Zee',
		lastName: 'Avi',
		birthDate: new Date('1989-10-01'),
		suspendDate: new Date('2017-02-24'),
		hireDate: new Date('2017-02-21'),
		phone: '+62815123465',
		email: 'zee.avi@mitrais.com',
		id: 'asdf'
	});
	const result = replaceEmp(input);
	const expected = {
		type: 'REPLACE_EMP',
		firstName: 'Zee',
		lastName: 'Avi',
		birthDate: new Date('1989-10-01'),
		suspendDate: new Date('2017-02-24'),
		hireDate: new Date('2017-02-21'),
		phone: '+62815123465',
		email: 'zee.avi@mitrais.com',
		id: 'asdf',
		division: 0,
		gender: 0,
		grade: 0,
		maritalStatus: 0,
		nationality: 0,
		status: '',
		subDivision: ''
	};

	expect(result).toEqual(expected);
});

test('create clean emp action', ()=> {
	const result = cleanEmp();
	const expected = {
		type: 'CLEAN_EMP'
	};

	expect(result).toEqual(expected);
});

test('create modify emp action', ()=> {
	const input = new Emp({
		firstName: 'Zee',
		lastName: 'Avi',
		birthDate: new Date('1989-10-01'),
		suspendDate: new Date('2017-02-24'),
		hireDate: new Date('2017-02-21'),
		phone: '+62815123465',
		email: 'zee.avi@mitrais.com',
		id: 'asdf'
	});
	const result = modifyEmp(input);
	const expected = {
		type: 'UPDATE_EMP',
		firstName: 'Zee',
		lastName: 'Avi',
		birthDate: new Date('1989-10-01'),
		suspendDate: new Date('2017-02-24'),
		hireDate: new Date('2017-02-21'),
		phone: '+62815123465',
		email: 'zee.avi@mitrais.com',
		id: 'asdf',
		division: 0,
		gender: 0,
		grade: 0,
		maritalStatus: 0,
		nationality: 0,
		status: '',
		subDivision: ''
	};

	expect(result).toEqual(expected);
})
