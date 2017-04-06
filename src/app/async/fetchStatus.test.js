import {
	GET_EMPLOYEES
} from './employee/actions';
import {
	FETCH_FAIL
} from './commons';
import fetchStatus from './fetchStatus';
import {
	createStatusReducer
} from './fetchStatus';

describe('commons fetchStatus reducer', () => {

	test('dispatch GET_EMPLOYEES, isFetching must be true', () => {
		const action = {
			type: GET_EMPLOYEES
		}
		const expected = {
			isFetching: true,
			errorMessage: '',
			errorHttpCode: 200
		}
		const result = fetchStatus(undefined, action);

		expect(result).toEqual(expected);
	})

	test('dispatch FETCH_FAIL, isFetching must be false', () => {
		const action = {
			type: FETCH_FAIL,
			errText: 'No such entity',
			errStatus: 404
		};
		const expected = {
			isFetching: false,
			errorMessage: 'No such entity',
			errorHttpCode: 404
		}
		const result = fetchStatus(undefined, action);

		expect(result).toEqual(expected);
	})
})

describe('create fetch status reducer', () => {

	const reducer = createStatusReducer(['start'],['success'],['fail']);

	test('dispatch action type in success', () => {
		const action = {
			type: 'success'
		}
		const expected = {
			isFetching: false,
			errorMessage: '',
			errorHttpCode: 200
		}
		const result = reducer(undefined, action);
		expect(result).toEqual(expected);
	})

	test('dispatch action type in start', () => {
		const action = {
			type: 'start'
		}
		const expected = {
			isFetching: true,
			errorMessage: '',
			errorHttpCode: 200
		}
		const result = reducer(undefined, action);
		expect(result).toEqual(expected);
	})

	test('dispatch action type in fail', () => {
		const action = {
			type: 'fail',
			errStatus: 409,
			errText: 'fail fetching'
		}
		const expected = {
			isFetching: false,
			errorMessage: 'fail fetching',
			errorHttpCode: 409
		}
		const result = reducer(undefined, action);
		expect(result).toEqual(expected);
	})
})