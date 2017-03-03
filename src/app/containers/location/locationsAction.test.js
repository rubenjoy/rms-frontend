import {addLocation,
		modifyLocation,
		removeLocation} from './locationsAction';
import Location from './Location';

test('create addLocation action', () => {
	const input = new Location({
		employeeId: 'asdf',
		activeInd: true,
		branchOffice: 1,
		startDate: new Date('2017-01-04'),
		endDate: new Date('2017-12-24')
	});
	const result = addLocation(input);
	const expected = {
		type: 'ADD_LOCATION',
		employeeId: 'asdf',
		activeInd: true,
		branchOffice: 1,
		startDate: new Date('2017-01-04'),
		endDate: new Date('2017-12-24')
	};

	expect(result.id).toBeDefined();
	expect(result.type).toEqual(expected.type);
	expect(result.employeeId).toEqual(expected.employeeId);
	expect(result.activeInd).toEqual(expected.activeInd);
	expect(result.branchOffice).toEqual(expected.branchOffice);
	expect(result.startDate).toEqual(expected.startDate);
	expect(result.endDate).toEqual(expected.endDate);
})

test('create removeLocation action', () => {
	const input = 'asdf';
	const result = removeLocation(input);
	const expected = {
		type: 'DELETE_LOCATION',
		id: 'asdf'
	};

	expect(result).toEqual(expected);
})

test('create modifyLocation action', () => {
	const input = {
		id: 'asdf',
		startDate: new Date('2016-01-04'),
		endDate: new Date('2016-12-24')
	};
	const result = modifyLocation(input);
	const expected = {
		type: 'UPDATE_LOCATION',
		id: 'asdf',
		startDate: new Date('2016-01-04'),
		endDate: new Date('2016-12-24')	
	};

	expect(result).toEqual(expected);
})