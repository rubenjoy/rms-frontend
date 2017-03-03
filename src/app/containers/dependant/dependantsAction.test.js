import {addDependant} from './dependantsAction';
import {cleanDependants} from './dependantsAction';
import Dependant from './Dependant';
import {modifyDependant} from './dependantsAction';
import {removeDependant} from './dependantsAction';

test('create addDependant action', () => {
	const result = addDependant(new Dependant({
		relation: 1,
		name: 'Zee Avi', 
		birthDate: new Date('1989-10-01'),
		activeInd: true,
		employeeId: 'asdf',
		gender: 1,
		id: 'qwer'
	}));
	const expected = {
		type: 'ADD_DEPENDANT',
		relation: 1,
		name: 'Zee Avi', 
		birthDate: new Date('1989-10-01'),
		activeInd: true,
		employeeId: 'asdf',
		gender: 1,
		id: 'qwer'
	};

	expect(result).toEqual(expected);
});

test('create cleanDependants action', () => {
	const result = cleanDependants();
	const expected = {
		type: 'CLEAN_DEPENDANTS'
	};

	expect(result).toEqual(expected);
});

test('create removeDependant action', () => {
	const result = removeDependant('asdf');
	const expected = {
		type: 'DELETE_DEPENDANT',
		id: 'asdf'
	};

	expect(result).toEqual(expected);
});

test('create modifyDependant action', () => {
	const result = modifyDependant({
		id: 'asdf',
		birthDate: new Date('2012-01-20')
	});
	const expected = {
		type: 'UPDATE_DEPENDANT',
		id: 'asdf',
		birthDate: new Date('2012-01-20')
	};

	expect(result).toEqual(expected);
});