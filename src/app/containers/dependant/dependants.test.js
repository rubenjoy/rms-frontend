import {addDependant} from './dependantsAction';
import {cleanDependants} from './dependantsAction';
import Dependant from './Dependant';
import dependants from './dependants';
import {modifyDependant} from './dependantsAction';
import {removeDependant} from './dependantsAction';

test('dispatch add dependant to empty', () => {
	const initial = [];
	const action = addDependant(new Dependant({
		relation: 1,
		name: 'Zee Avi',
		birthDate: new Date('1989-10-01'),
		activeInd: true,
		employeeId: 'asdf',
		id: 'qwer',
		gender: 1
	}));
	const result = dependants(initial, action);
	const expected = [{
		relation: 1,
		name: 'Zee Avi',
		birthDate: new Date('1989-10-01'),
		activeInd: true,
		employeeId: 'asdf',
		id: 'qwer',
		gender: 1
	}];

	expect(result).toEqual(expected);
});

test('dispatch remove dependant', () => {
	const initial = [{
		relation: 1,
		name: 'Zee Avi',
		birthDate: new Date('1989-10-01'),
		activeInd: true,
		employeeId: 'asdf',
		id: 'qwer',
		gender: 1
	}];
	const action = removeDependant('qwer');
	const result = dependants(initial, action);
	const expected = [];

	expect(result).toEqual(expected);
});

test('dispatch remove dependant w/ non exists id', () => {
	const initial = [{
		relation: 1,
		name: 'Zee Avi',
		birthDate: new Date('1989-10-01'),
		activeInd: true,
		employeeId: 'asdf',
		id: 'qwer',
		gender: 1
	}];
	const action = removeDependant('asdf');
	const result = dependants(initial, action);
	const expected = [{
		relation: 1,
		name: 'Zee Avi',
		birthDate: new Date('1989-10-01'),
		activeInd: true,
		employeeId: 'asdf',
		id: 'qwer',
		gender: 1
	}];

	expect(result).toEqual(expected);
});

test('dispatch clean all dependants', () => {
	const initial = [{
		relation: 1,
		name: 'Zee Avi',
		birthDate: new Date('1989-10-01'),
		activeInd: true,
		employeeId: 'asdf',
		id: 'qwer',
		gender: 1
	}];
	const action = cleanDependants();
	const result = dependants(initial, action);
	const expected = [];

	expect(result).toEqual(expected);

});

test('dispatch update dependant', () => {
	const initial = [{
		relation: 1,
		name: 'Zee Avi',
		birthDate: new Date('1989-10-01'),
		activeInd: true,
		employeeId: 'asdf',
		id: 'qwer',
		gender: 1
	}];
	const action = modifyDependant({
		id: 'qwer',
		name: 'Zee Afifah',
		birthDate: new Date('1989-09-01')
	});
	const result = dependants(initial, action);
	const expected = [{
		relation: 1,
		name: 'Zee Afifah',
		birthDate: new Date('1989-09-01'),
		activeInd: true,
		employeeId: 'asdf',
		id: 'qwer',
		gender: 1
	}];

	expect(result).toEqual(expected);
});

test('dispatch update dependant w/ non existence id', () => {
	const initial = [{
		relation: 1,
		name: 'Zee Avi',
		birthDate: new Date('1989-10-01'),
		activeInd: true,
		employeeId: 'asdf',
		id: 'qwer',
		gender: 1
	}];
	const action = modifyDependant({
		id: 'asdf',
		name: 'Zee Afifah',
		birthDate: new Date('1989-09-01')
	});
	const result = dependants(initial, action);
	const expected = [{
		relation: 1,
		name: 'Zee Avi',
		birthDate: new Date('1989-10-01'),
		activeInd: true,
		employeeId: 'asdf',
		id: 'qwer',
		gender: 1
	}];

	expect(result).toEqual(expected);
});