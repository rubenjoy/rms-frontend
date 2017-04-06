import {
	FETCH_FAIL,
	PARSE_JSON_FAIL
} from './commons';
import {
	GET_EMPLOYEES,
	GET_EMPLOYEES_FAIL,
	GET_EMPLOYEES_SUCCESS,
	PATCH_EMPLOYEE,
	PATCH_EMPLOYEE_FAIL,
	PATCH_EMPLOYEE_SUCCESS,
	POST_EMPLOYEE,
	POST_EMPLOYEE_FAIL,
	POST_EMPLOYEE_SUCCESS
} from './employee/actions';

export const defaultState = {
	isFetching: false,
	errorMessage: '',
	errorHttpCode: 200
};

/**
 *  fetch status is reducer function
 *  TODO is it better to split to each async action & use reduce-reducers
 **/
function fetchStatus(state = defaultState, action) {
	switch (action.type) {
		case GET_EMPLOYEES:
		case PATCH_EMPLOYEE:
		case POST_EMPLOYEE:
			return Object.assign({}, defaultState, {
				isFetching: true
			});
		case GET_EMPLOYEES_SUCCESS:
		case PATCH_EMPLOYEE_SUCCESS:
		case POST_EMPLOYEE_SUCCESS:
			return defaultState;
		case GET_EMPLOYEES_FAIL:
		case PATCH_EMPLOYEE_FAIL:
		case POST_EMPLOYEE_FAIL:
		case FETCH_FAIL:
		case PARSE_JSON_FAIL:
			return {
				isFetching: false,
				errorMessage: action.errText,
				errorHttpCode: action.errStatus > 0 ? action.errStatus : 404
			}
		default:
			return state;
	}
}

export default fetchStatus;

/**
 *  @param starts action type which start fetch operation
 *  @param successes action type after fetch done
 *  @param fails action type after fetch done with errors
 **/
export const createStatusReducer = (starts, successes, fails) =>
(state = defaultState, action) => {
	if (starts.indexOf(action.type) !== -1) {
		return Object.assign({}, state, {
			isFetching: true,
			errorMessage: defaultState.errorMessage,
			errorHttpCode: defaultState.errorHttpCode
		});
	}
	if (successes.indexOf(action.type) !== -1) {
		return Object.assign({}, state, {isFetching: false})
	}
	if (fails.indexOf(action.type) !== -1) {
		return Object.assign({}, state, {
			isFetching: false,
			errorMessage: action.errText,
			errorHttpCode: action.errStatus > 0 ? action.errStatus : 404
		})
	}
	return state;
}