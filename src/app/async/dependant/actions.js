import {
	createErrorCreator,
	createDeleteFetch,
	createFetch,
	createGetFetch,
	fixUrlId,
	HTTP_PATCH_METHOD,
	HTTP_POST_METHOD
} from '../commons';
import {depTypeMapToGender} from '../../utils/optionsConfig';

export const GET_DEPENDANTS = 'GET_DEPENDANTS';
export const GET_DEPENDANTS_SUCCESS = 'GET_DEPENDANTS_SUCCESS';
export const GET_DEPENDANTS_FAIL = 'GET_DEPENDANTS_FAIL';

export const POST_DEPENDANT = 'POST_DEPENDANT';
export const POST_DEPENDANT_SUCCESS = 'POST_DEPENDANT_SUCCESS';
export const POST_DEPENDANT_FAIL = 'POST_DEPENDANT_FAIL';

export const PATCH_DEPENDANT = 'PATCH_DEPENDANT';
export const PATCH_DEPENDANT_SUCCESS = 'PATCH_DEPENDANT_SUCCESS';
export const PATCH_DEPENDANT_FAIL = 'PATCH_DEPENDANT_FAIL';

export const DELETE_DEPENDANT_ASYNC = 'DELETE_DEPENDANT_ASYNC';
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
	...dependant
})

const requestUpdate = () => ({
	type: PATCH_DEPENDANT
})

const receiveUpdate = (dependant) => ({
	type: PATCH_DEPENDANT_SUCCESS,
	...dependant
})

const requestDelete = () => ({
	type: DELETE_DEPENDANT_ASYNC
})

const receiveDelete = (id) => ({
	type: DELETE_DEPENDANT_SUCCESS,
	id
})

/**
 *  @param employeeId url 
 **/
export const getDependants = (employeeId) => (dispatch) => {
	dispatch(requestDependants());
	const url = employeeId + NESTED_URL;
	const onSuccess = (json) => {
		dispatch(receiveDependants(json));
	}
	const onError = (error) => {
		dispatch(createErrorCreator(GET_DEPENDANTS_FAIL)(error));
	}
	return createGetFetch(url, onSuccess, onError, {});
}

const addGender = (json) => {
	const gender = depTypeMapToGender[json.relation];
	return {...json, gender}
}

const fix = (json, employeeId) => {
	return addGender(fixUrlId(json,employeeId, NESTED_URL));
}

/**
 *  @param employeeId url
 *  @param dependant
 **/
export const postDependant = (employeeId, dependant) => (dispatch) => {
	dispatch(requestCreate());
	const url = employeeId + NESTED_URL;
	const onSuccess = json =>  {
		dispatch(receiveCreate(fix(json, employeeId)));
	}
	const onError = error => {
		dispatch(createErrorCreator(POST_DEPENDANT_FAIL)(error));
	}
	return createFetch(url, HTTP_POST_METHOD, onSuccess, onError, dependant);
}

/** 
 *  @param dependant
 **/
export const patchDependant = (dependant) => (dispatch) => {
	dispatch(requestUpdate());
	const url = dependant.id;
	const employeeId = dependant.id.replace(/\/dependents\/\d+$/, '');
	dependant.id = 0;
	const onSuccess = (json) => {
		dispatch(receiveUpdate(fix(json,employeeId)));
	}
	const onError = (error) => {
		dispatch(createErrorCreator(PATCH_DEPENDANT_FAIL)(error));
	}
	return createFetch(url, HTTP_PATCH_METHOD, onSuccess, onError, dependant);
}

/**
 *  @param dependantId
 **/
export const deleteDependant = (dependantId) => (dispatch) => {
	dispatch(requestDelete());
	const onSuccess = () => {
		dispatch(receiveDelete(dependantId));
	}
	const onError = (error) => {
		dispatch(createErrorCreator(DELETE_DEPENDANT_FAIL)(error));
	}
	return createDeleteFetch(dependantId, onSuccess, onError);
}