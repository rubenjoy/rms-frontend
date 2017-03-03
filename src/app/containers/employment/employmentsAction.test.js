import {addEmployment} from './employmentsAction';
import {cleanEmployments} from './employmentsAction';
import {removeEmployment} from './employmentsAction';
import Employment from './Employment';
import {modifyEmployment} from './employmentsAction';
import {toggleEmployment} from './employmentsAction';

test('add employment action', () => {
	const employment = new Employment({
		startDate: new Date('2014-01-04'),
		endDate: new Date('2015-12-01'),
		employer: 'Geekseat',
		jobTitle: 'dotnet programmer',
		activeInd: true,
		employeeId: 'asdf',
		id: 'qwer',
		jobDesc: [
			'create database',
			'setup database',
			'create RMS App dengan ReactJS'
		]
	});
	const result = addEmployment(employment);
	const expected = {
		type: 'ADD_EMPLOYMENT',
		startDate: new Date('2014-01-04'),
		endDate: new Date('2015-12-01'),
		employer: 'Geekseat',
		jobTitle: 'dotnet programmer',
		activeInd: true,
		employeeId: 'asdf',
		id: 'qwer',
		jobDesc: [
			'create database',
			'setup database',
			'create RMS App dengan ReactJS'
		]
	};

	expect(result).toEqual(expected);
})

test('remove employment action', () => {
	const result = removeEmployment('asdf');
	const expected = {
		type: 'DELETE_EMPLOYMENT',
		id: 'asdf'
	};

	expect(result).toEqual(expected);
});

test('toggle employment action', () => {
	const result = toggleEmployment('asdf');
	const expected = {
		type: 'TOGGLE_EMPLOYMENT',
		id: 'asdf'
	}

	expect(result).toEqual(expected);
});

test('modify employment action', () => {
	const input = {
		id: 'asdf',
		jobTitle: 'Programmer',
		employer: 'Infomedia'
	};
	const result = modifyEmployment(input);
	const expected = {
		type: 'UPDATE_EMPLOYMENT',
		id: 'asdf',
		jobTitle: 'Programmer', 
		employer: 'Infomedia'
	};

	expect(result).toEqual(expected);
})

test('clean employments action', () => {
	const result = cleanEmployments();
	const expected = {
		type: 'CLEAN_EMPLOYMENTS'
	};

	expect(result).toEqual(expected);
})