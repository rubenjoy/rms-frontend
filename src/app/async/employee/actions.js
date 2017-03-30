require('isomorphic-fetch');

import {
	createFetch,
	HTTP_GET_METHOD,
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

export const catchFail = (type, errStatus, errText = "") => ({
	type, errStatus, errText
});

const requestCreate = () => ({
	type: POST_EMPLOYEE
})

const receiveCreate = (employee) => ({
	type: POST_EMPLOYEE_SUCCESS,
	employee
})

const requestUpdate = () => ({
	type: PATCH_EMPLOYEE
})

const receiveUpdate = (employee) => ({
	type: PATCH_EMPLOYEE_SUCCESS,
	employee
})

const URL = '/employees';

/** 
 *  async action creator, that dispatch 
 *  @param page number default to 0
 **/
export const getEmployees = (page = 0) => (dispatch) => {
	dispatch(requestEmployees());
	const params = {
		page,
		size: PAGE_SIZE
	}
	return createFetch(URL, HTTP_GET_METHOD, receiveEmployees,
		GET_EMPLOYEES_FAIL, dispatch, params);
}

/**
 *  async action creator to post employee
 *  @param employee object to be posted
 **/
export const postEmployee = (employee) => (dispatch) => {
	dispatch(requestCreate());
	return createFetch(URL, HTTP_POST_METHOD, receiveCreate,
		POST_EMPLOYEE_FAIL, dispatch, employee);
}

/**
 *  async action creator to patch employee
 **/
export const patchEmployee = (employee) => (dispatch) => {
	dispatch(requestUpdate());
	const url = employee.id;
	employee.id = 0;
	return createFetch(url, HTTP_PATCH_METHOD, receiveUpdate,
		PATCH_EMPLOYEE_FAIL, dispatch, employee);
}