import currentEmp from './currentEmp';
import {cleanEmp} from './currentEmpAction';
import {modifyEmp} from './currentEmpAction';
import {replaceEmp} from './currentEmpAction';
import Emp from './Emp';

test('replace emp in store', () => {
	const initial = new Emp({});
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
	const action = replaceEmp(input);
	const result = currentEmp(initial, action);
	
	expect(result).toEqual(input);
});

test('clean emp in store', () => {
	const initial = new Emp({
		firstName: 'Zee',
		lastName: 'Avi',
		birthDate: new Date('1989-10-01'),
		suspendDate: new Date('2017-02-24'),
		hireDate: new Date('2017-02-21'),
		phone: '+62815123465',
		email: 'zee.avi@mitrais.com',
		id: 'asdf'
	});
	const action = cleanEmp();
	const result = currentEmp(initial,action);
	// TODO new Date will result in different date 
	const expected = new Emp({
		hireDate: new Date(),
		suspendDate: new Date(),
		birthDate: new Date()
	});

	expect(result).toEqual(expected);
});

test('modify emp in store (partial change for onChange', () => {
	const initial = new Emp({
		firstName: 'Zee',
		lastName: 'Avi',
		birthDate: new Date('1989-10-01'),
		suspendDate: new Date('2017-02-24'),
		hireDate: new Date('2017-02-21'),
		phone: '+62815123465',
		email: 'zee.avi@mitrais.com',
		id: 'asdf'
	});
	const input = {
		birthDate: new Date('1988-10-01'),
	};
	const action = modifyEmp(input);
	const result = currentEmp(initial, action);
	const expected = new Emp({
		firstName: 'Zee',
		lastName: 'Avi',
		birthDate: new Date('1988-10-01'),
		suspendDate: new Date('2017-02-24'),
		hireDate: new Date('2017-02-21'),
		phone: '+62815123465',
		email: 'zee.avi@mitrais.com',
		id: 'asdf'
	});

	expect(result).toEqual(expected);
})