import {addLocation,
		modifyLocation,
		removeLocation} from './locationsAction';
import Location from './Location';
import locations from './locations';

test('add location to empty store', () => {
	const initial = [];
	const input = new Location({
		employeeId: 'asdf',
		id: 'awer',
		branchOffice: 0,
		startDate: new Date('2017-03-01'),
		endDate: new Date('2017-12-24'),
		activeInd: true
	});
	const action = addLocation(input);
	const result = locations(initial,action);
	const expected = [{
		employeeId: 'asdf',
		id: 'awer',
		branchOffice: 0,
		startDate: new Date('2017-03-01'),
		endDate: new Date('2017-12-24'),
		activeInd: true
	}];

	expect(result).toEqual(expected);
	expect(result.length).toEqual(1);
})

test('remove location from store', () => {
	const initial = [{
		employeeId: 'asdf',
		id: 'awer',
		branchOffice: 0,
		startDate: new Date('2017-03-01'),
		endDate: new Date('2017-12-24'),
		activeInd: true
	}];
	const input = 'awer';
	const action = removeLocation(input);
	const result = locations(initial,action);
	const expected = [];

	expect(result).toEqual(expected);
	expect(result.length).toEqual(0);
})

test('remove non exist location', () => {
	const initial = [{
		employeeId: 'asdf',
		id: 'awer',
		branchOffice: 0,
		startDate: new Date('2017-03-01'),
		endDate: new Date('2017-12-24'),
		activeInd: true
	}];
	const input = 'qwer';
	const action = removeLocation(input);
	const result = locations(initial,action);
	const expected = [{
		employeeId: 'asdf',
		id: 'awer',
		branchOffice: 0,
		startDate: new Date('2017-03-01'),
		endDate: new Date('2017-12-24'),
		activeInd: true
	}];

	expect(result).toEqual(expected);
	expect(result.length).toEqual(1);
})

test('modify location in store', () => {
	const initial = [{
		employeeId: 'asdf',
		id: 'awer',
		branchOffice: 0,
		startDate: new Date('2017-03-01'),
		endDate: new Date('2017-12-24'),
		activeInd: true
	}]
	const input = {
		id: 'awer',
		branchOffice: 2
	};
	const action = modifyLocation(input);
	const result = locations(initial,action);
	const expected = [{
		employeeId: 'asdf',
		id: 'awer',
		branchOffice: 2,
		startDate: new Date('2017-03-01'),
		endDate: new Date('2017-12-24'),
		activeInd: true	
	}];

	expect(result).toEqual(expected);
})