import {
	createFetch,
	createGetFetch,
	HTTP_DELETE_METHOD,
	HTTP_PATCH_METHOD,
	HTTP_POST_METHOD
} from '../commons';

export const GET_DEPENDANTS = 'GET_DEPENDANTS';
export const GET_DEPENDANTS_SUCCESS = 'GET_DEPENDANTS_SUCCESS';
export const GET_DEPENDANTS_FAIL = 'GET_DEPENDANTS_FAIL';

export const POST_DEPENDANT = 'POST_DEPENDANT';
export const POST_DEPENDANT_SUCCESS = 'POST_DEPENDANT_SUCCESS';
export const POST_DEPENDANT_FAIL = 'POST_DEPENDANT_FAIL';

export const PATCH_DEPENDANT = 'PATCH_DEPENDANT';
export const PATCH_DEPENDANT_SUCCESS = 'PATCH_DEPENDANT_SUCCESS';
export const PATCH_DEPENDANT_FAIL = 'PATCH_DEPENDANT_FAIL';

export const DELETE_DEPENDANT = 'DELETE_DEPENDANT';
export const DELETE_DEPENDANT_SUCCESS = 'DELETE_DEPENDANT_SUCCESS';
export const DELETE_DEPENDANT_FAIL = 'DELETE_DEPENDANT_FAIL';

const NESTED_URL = '/dependents';

const requestDependants = () => ({
	type: GET_DEPENDANTS
})

const receiveDependants = (dependants) => ({
	type: GET_DEPENDANTS_SUCCESS,
	dependants
})

const requestCreate = () => ({
	type: POST_DEPENDANT
})

const receiveCreate = (dependant) => ({
	type: POST_DEPENDANT_SUCCESS,
	dependant
})

const requestUpdate = () => ({
	type: PATCH_DEPENDANT
})

const receiveUpdate = (dependant) => ({
	type: PATCH_DEPENDANT_SUCCESS,
	dependant
})

const requestDelete = () => ({
	type: DELETE_DEPENDANT
})

const receiveDelete = () => ({
	type: DELETE_DEPENDANT_SUCCESS
})

/**
 *  @param employeeId url 
 **/
export const getDependants = (employeeId) => (dispatch) => {
	dispatch(requestDependants());
	const url = employeeId + NESTED_URL;
	return createGetFetch(url, receiveDependants,
		GET_DEPENDANTS_FAIL, dispatch);
}

/**
 *  @param employeeId url
 *  @param dependant
 **/
export const postDependant = (employeeId, dependant) => (dispatch) => {
	dispatch(requestCreate());
	const url = employeeId + NESTED_URL;
	return createFetch(url, HTTP_POST_METHOD, receiveCreate,
		POST_DEPENDANT_FAIL, dispatch, dependant); 
}

/** 
 *  @param dependant
 **/
export const patchDependant = (dependant) => (dispatch) => {
	dispatch(requestUpdate());
	const url = dependant.id;
	dependant.id = 0;
	return createFetch(url, HTTP_PATCH_METHOD, receiveUpdate,
		PATCH_DEPENDANT_FAIL, dispatch, dependant);
}

/**
 *  @param dependantId
 **/
export const deleteDependant = (dependantId) => (dispatch) => {
	dispatch(requestDelete());
	return createFetch(dependantId, HTTP_DELETE_METHOD, receiveDelete,
		DELETE_DEPENDANT_FAIL, dispatch);
}