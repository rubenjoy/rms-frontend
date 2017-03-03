import {addGrade} from './gradesAction';
import {cleanGrades} from './gradesAction';
import Grade from './Grade';
import grades from './grades';
import {modifyGrade} from './gradesAction';
import {removeGrade} from './gradesAction';

test('dispatch Grade to empty state', () => {
	const initial = [];
	const action = addGrade(new Grade({
		startDate: new Date('2016-01-04'),
		endDate: new Date('2016-12-24'),
		devStage: 1,
		grade: 1,
		id: 'asdf',
		employeeId: 'qwer'
	}));
	const result = grades(initial, action);
	const expected = [{
		startDate: new Date('2016-01-04'),
		endDate: new Date('2016-12-24'),
		devStage: 1,
		grade: 1,
		id: 'asdf',
		employeeId: 'qwer'
	}];

	expect(result).toEqual(expected);
});

test('dispatch cleaning the grades', () => {
	const initial = [{
		startDate: new Date('2016-01-04'),
		endDate: new Date('2016-12-24'),
		devStage: 1,
		grade: 1,
		id: 'asdf',
		employeeId: 'qwer'
	}];
	const action = cleanGrades();
	const result = grades(initial, action);
	const expected = [];

	expect(result).toEqual(expected);
});

test('dispatch remove the grades', () => {
	const initial = [{
		startDate: new Date('2016-01-04'),
		endDate: new Date('2016-12-24'),
		devStage: 1,
		grade: 1,
		id: 'asdf',
		employeeId: 'qwer'
	}];
	const action = removeGrade('asdf');
	const result = grades(initial, action);
	const expected = [];

	expect(result).toEqual(expected);
});

test('dispatch remove grade w/ non exist id', () => {
	const initial = [{
		startDate: new Date('2016-01-04'),
		endDate: new Date('2016-12-24'),
		devStage: 1,
		grade: 1,
		id: 'asdf',
		employeeId: 'qwer'
	}];
	const action = removeGrade('qwer');
	const result = grades(initial, action);
	const expected = [{
		startDate: new Date('2016-01-04'),
		endDate: new Date('2016-12-24'),
		devStage: 1,
		grade: 1,
		id: 'asdf',
		employeeId: 'qwer'
	}];

	expect(result).toEqual(expected);
})

test('dispatch modify grade action', () => {
	const initial = [{
		startDate: new Date('2016-01-04'),
		endDate: new Date('2016-12-24'),
		devStage: 1,
		grade: 1,
		id: 'asdf',
		employeeId: 'qwer'
	}];
	const action = modifyGrade(new Grade({
		startDate: new Date('2016-01-04'),
		endDate: new Date('2016-12-24'),
		devStage: 4,
		grade: 1,
		id: 'asdf',
		employeeId: 'qwer'
	}));
	const result = grades(initial, action);
	const expected = [{
		startDate: new Date('2016-01-04'),
		endDate: new Date('2016-12-24'),
		devStage: 4,
		grade: 1,
		id: 'asdf',
		employeeId: 'qwer'
	}];

	expect(result).toEqual(expected);
});

test('dispatch update with partial grade data', () => {
	const initial = [{
		startDate: new Date('2016-01-04'),
		endDate: new Date('2016-12-24'),
		devStage: 1,
		grade: 1,
		id: 'asdf',
		employeeId: 'qwer'
	}];
	const action = modifyGrade({
		devStage: 4,
		id: 'asdf',
	});
	const result = grades(initial, action);
	const expected = [{
		startDate: new Date('2016-01-04'),
		endDate: new Date('2016-12-24'),
		devStage: 4,
		grade: 1,
		id: 'asdf',
		employeeId: 'qwer'
	}];

	expect(result).toEqual(expected);
})