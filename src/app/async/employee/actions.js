require('isomorphic-fetch');

import {
	createErrorCreator,
	createFetch,
	createGetFetch,
	HTTP_PATCH_METHOD,
	HTTP_POST_METHOD
} from './../commons';

export const GET_EMPLOYEES = 'GET_EMPLOYEES';
export const GET_EMPLOYEES_SUCCESS = 'GET_EMPLOYEES_SUCCESS';
export const GET_EMPLOYEES_FAIL = 'GET_EMPLOYEES_FAIL';

export const POST_EMPLOYEE = 'POST_EMPLOYEE';
export const POST_EMPLOYEE_SUCCESS = 'POST_EMPLOYEE_SUCCESS';
export const POST_EMPLOYEE_FAIL = 'POST_EMPLOYEE_FAIL';

export const PATCH_EMPLOYEE = 'PATCH_EMPLOYEE';
export const PATCH_EMPLOYEE_SUCCESS = 'PATCH_EMPLOYEE_SUCCESS';
export const PATCH_EMPLOYEE_FAIL = 'PATCH_EMPLOYEE_FAIL';

const PAGE_SIZE = 20;

const requestEmployees = () => ({
	type: GET_EMPLOYEES
});

const receiveEmployees = (employees) => ({
	type: GET_EMPLOYEES_SUCCESS,
	employees
});

const requestCreate = () => ({
	type: POST_EMPLOYEE
})

const receiveCreate = (employee) => ({
	type: POST_EMPLOYEE_SUCCESS,
	...employee
})

const requestUpdate = () => ({
	type: PATCH_EMPLOYEE
})

const receiveUpdate = (employee) => ({
	type: PATCH_EMPLOYEE_SUCCESS,
	...employee
})

export const URL = '/employees';

/** 
 *  async action creator, that dispatch 
 *  @param page number default to 0
 **/
export const getEmployees = (page = 0) => (dispatch)  => {
	dispatch(requestEmployees());
	const params = {
		page,
		size: PAGE_SIZE
	}
	const onSuccess = (json) => {
		dispatch(receiveEmployees(json));
	}
	const onError = (error) => {
		dispatch(createErrorCreator(GET_EMPLOYEES_FAIL)(error));
		// throw new Error(error);
	}
	return createGetFetch(URL, onSuccess, onError, params);
}

/**
 *  async action creator to post employee
 *  @param employee object to be posted
 **/
export const postEmployee = (employee) => (dispatch) => {
	dispatch(requestCreate());
	const onSuccess = (json) => {
		dispatch(receiveCreate(json));
	}
	const onError = (error) => {
		dispatch(createErrorCreator(POST_EMPLOYEE_FAIL)(error));
	}
	return createFetch(URL, HTTP_POST_METHOD, onSuccess, onError, employee);
}

/**
 *  async action creator to patch employee
 **/
export const patchEmployee = (employee) => (dispatch) => {
	dispatch(requestUpdate());
	const url = employee.id;
	employee.id = 0;
	const onSuccess = (json) => {
		dispatch(receiveUpdate(json));
	}
	const onError = (error) => {
		dispatch(createErrorCreator(PATCH_EMPLOYEE_FAIL)(error));
	}
	return createFetch(url, HTTP_PATCH_METHOD, onSuccess, onError, employee);
}