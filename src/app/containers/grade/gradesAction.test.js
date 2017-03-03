import {addGrade} from './gradesAction';
import {cleanGrades} from './gradesAction';
import Grade from './Grade';
import {removeGrade} from './gradesAction';
import {modifyGrade} from './gradesAction';

test('create addGrade action', () => {
	const input = new Grade({id: 'asdf'});
	const result = addGrade(input);
	const expected = {
		type: 'ADD_GRADE',
		startDate: new Date('1927-09-09'),
		endDate: new Date('1927-09-09'),
		grade: 0,
		devStage: 0,
		employeeId: '',
		id: 'asdf'
	}

	expect(result).toEqual(expected);
});

test('create cleanGrades action', () => {
	const result = cleanGrades();
	const expected = {
		type: 'CLEAN_GRADES'
	};

	expect(result).toEqual(expected);
});

test('create removeGrade action', () => {
	// const initial = [{
	// 	id: 'asdf',
	// 	employeeId: 'qwer',
	// 	startDate: new Date('2016-01-04'),
	// 	endDate: new Date('2017-12-24'),
	// 	devStage: 0,
	// 	grade: 0
	// }];
	const result = removeGrade('asdf');
	const expected = {
		type: 'DELETE_GRADE',
		id: 'asdf'
	};

	expect(result).toEqual(expected);
});

test('create modifyGrade action', () => {
	const result = modifyGrade({
		startDate: new Date('2014-01-04'),
		endDate: new Date('2015-12-24'),
		id: 'asdf'
	});
	const expected = {
		type: 'UPDATE_GRADE',
		startDate: new Date('2014-01-04'),
		endDate: new Date('2015-12-24'),
		id: 'asdf'
	};

	expect(result).toEqual(expected);
});