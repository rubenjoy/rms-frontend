import {addEmployment} from './employmentsAction';
import {cleanEmployments} from './employmentsAction';
import Employment from './Employment';
import employments from './employments';
import {modifyEmployment} from './employmentsAction';
import {removeEmployment} from './employmentsAction';
import {toggleEmployment} from './employmentsAction';

test('add employments', () => {
	const initial = [];
	const action = addEmployment(new Employment({
		startDate: new Date('2014-01-04'),
		endDate: new Date('2015-12-01'),
		employer: 'Geekseat',
		jobTitle: 'dotnet programmer',
		activeInd: true,
		employeeId: 'asdf',
		id: 'qwer',
		jobDesc: [
			'setup database server',
			'create database',
			'create RMS app using ReactJS'
		]
	}));
	const result = employments(initial, action);
	const expected = [{
		startDate: new Date('2014-01-04'),
		endDate: new Date('2015-12-01'),
		employer: 'Geekseat',
		jobTitle: 'dotnet programmer',
		activeInd: true,
		employeeId: 'asdf',
		id: 'qwer',
		jobDesc: [
			'setup database server',
			'create database',
			'create RMS app using ReactJS'
		]
	}];

	expect(result).toEqual(expected);
});

test('remove employments', () => {
	const initial = [{
		startDate: new Date('2014-01-04'),
		endDate: new Date('2015-12-01'),
		employer: 'Geekseat',
		jobTitle: 'dotnet programmer',
		activeInd: true,
		employeeId: 'asdf',
		id: 'qwer'
	}];
	const action = removeEmployment('qwer');
	const result = employments(initial,action);
	const expected = [];

	expect(result).toEqual(expected);
})

test('remove non-exist employment', () => {
	const initial = [{
		startDate: new Date('2014-01-04'),
		endDate: new Date('2015-12-01'),
		employer: 'Geekseat',
		jobTitle: 'dotnet programmer',
		activeInd: true,
		employeeId: 'asdf',
		id: 'qwer'
	}];
	const action = removeEmployment('asdf');
	const result = employments(initial,action);
	const expected = [{
		startDate: new Date('2014-01-04'),
		endDate: new Date('2015-12-01'),
		employer: 'Geekseat',
		jobTitle: 'dotnet programmer',
		activeInd: true,
		employeeId: 'asdf',
		id: 'qwer'
	}];

	expect(result).toEqual(expected);	
});

test('toggle employment true to false', () => {
	const initial = [{
		startDate: new Date('2014-01-04'),
		endDate: new Date('2015-12-01'),
		employer: 'Geekseat',
		jobTitle: 'dotnet programmer',
		activeInd: true,
		employeeId: 'asdf',
		id: 'qwer'
	}];
	const action = toggleEmployment('qwer');
	const result = employments(initial,action);
	const expected = [{
		startDate: new Date('2014-01-04'),
		endDate: new Date('2015-12-01'),
		employer: 'Geekseat',
		jobTitle: 'dotnet programmer',
		activeInd: false,
		employeeId: 'asdf',
		id: 'qwer'
	}];

	expect(result).toEqual(expected);	
})

test('add employment\'s job desc to empty one', () => {
	const initial = [{
		startDate: new Date('2014-01-04'),
		endDate: new Date('2015-12-01'),
		employer: 'Geekseat',
		jobTitle: 'dotnet programmer',
		activeInd: true,
		employeeId: 'asdf',
		id: 'qwer'
	}];
	const input = {
		id: 'qwer',
		jobDesc: [
			'setup database server',
			'create database',
			'create RMS app w/ ReactJS'
		]	
	};
	const action = modifyEmployment(input);
	const result = employments(initial, action);
	const expected = [{
		startDate: new Date('2014-01-04'),
		endDate: new Date('2015-12-01'),
		employer: 'Geekseat',
		jobTitle: 'dotnet programmer',
		activeInd: true,
		employeeId: 'asdf',
		id: 'qwer',
		jobDesc: [
			'setup database server',
			'create database',
			'create RMS app w/ ReactJS'
		]
	}];

	expect(result).toEqual(expected);
})

test('clean employments store', () => {
	const initial = [{
		startDate: new Date('2014-01-04'),
		endDate: new Date('2015-12-01'),
		employer: 'Geekseat',
		jobTitle: 'dotnet programmer',
		activeInd: true,
		employeeId: 'asdf',
		id: 'qwer'
	}];
	const action = cleanEmployments();
	const result = employments(initial, action);
	const expected = [];

	expect(result).toEqual(expected);
})