import {GET_LOCATIONS_SUCCESS} from './actions';
import {locations} from './reducers';

test('dispatch GET locations action', () => {
	const action = {
		type: GET_LOCATIONS_SUCCESS,
		locations: [{
			branchOffice: 'bali suwung',
			startDate: '2016-01-04',
			endDate: '2017-12-24',
			activeInd: false,
			id: '/employees/50/locations/50'
		}]
	}
	const expected = [{
			branchOffice: 'bali suwung',
			startDate: '2016-01-04',
			endDate: '2017-12-24',
			activeInd: false,
			id: '/employees/50/locations/50',
			employeeId: '/employees/50/locations/50'
		}]
	const result = locations([], action);

	expect(result).toEqual(expected);
})