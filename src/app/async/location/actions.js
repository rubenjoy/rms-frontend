require('isomorphic-fetch');

import {
	createDeleteFetch,
	createErrorCreator,
	createFetch,
	createGetFetch,
	fixUrlId,
	HTTP_PATCH_METHOD,
	HTTP_POST_METHOD
} from './../commons';

export const GET_LOCATIONS = 'GET_LOCATIONS';
export const GET_LOCATIONS_SUCCESS = 'GET_LOCATIONS_SUCCESS';
export const GET_LOCATIONS_FAIL = 'GET_LOCATIONS_FAIL';

export const POST_LOCATION = 'POST_LOCATION';
export const POST_LOCATION_SUCCESS = 'POST_LOCATION_SUCCESS';
export const POST_LOCATION_FAIL = 'POST_LOCATION_FAIL';

export const PATCH_LOCATION = 'PATCH_LOCATION';
export const PATCH_LOCATION_SUCCESS = 'PATCH_LOCATION_SUCCESS';
export const PATCH_LOCATION_FAIL = 'PATCH_LOCATION_FAIL';

export const DELETE_LOCATION_ASYNC = 'DELETE_LOCATION_ASYNC';
export const DELETE_LOCATION_SUCCESS = 'DELETE_LOCATION_SUCCESS';
export const DELETE_LOCATION_FAIL = 'DELETE_LOCATION_FAIL';

const NESTED_URL = '/locations';

const requestLocations = () => ({
	type: GET_LOCATIONS
})

const receiveLocations = (locations) => ({
	type: GET_LOCATIONS_SUCCESS,
	locations
})

const requestCreate = () => ({
	type: POST_LOCATION
})

const receiveCreate = (location) => ({
	type: POST_LOCATION_SUCCESS,
	...location
})

const requestUpdate = () => ({
	type: PATCH_LOCATION
})

const receiveUpdate = (location) => ({
	type: PATCH_LOCATION_SUCCESS,
	...location
})

const requestDelete = () => ({
	type: DELETE_LOCATION_ASYNC
})

const receiveDelete = (id) => ({
	type: DELETE_LOCATION_SUCCESS, id
})

/**
 *  @param employeeId is url id
 **/
export const getLocations = (employeeId) => (dispatch) => {
	dispatch(requestLocations());
	const url = employeeId + NESTED_URL;
	const onSuccess = json => dispatch(receiveLocations(json));
	const onError = error => dispatch(createErrorCreator(GET_LOCATIONS_FAIL)(error));
	return createGetFetch(url, onSuccess, onError, {});
}

/**
 *  @param employeeId
 *  @param location
 **/
export const postLocation = (employeeId, location) => (dispatch) => {
	dispatch(requestCreate());
	const url = employeeId + NESTED_URL;
	const onSuccess = json => {
		dispatch(receiveCreate(fixUrlId(json,employeeId,NESTED_URL)));
	}
	const onError = error => {
		dispatch(createErrorCreator(POST_LOCATION_FAIL)(error));
	}

	return createFetch(url, HTTP_POST_METHOD, onSuccess, onError, location);
}

/**
 *  @param location
 **/
export const patchLocation = (location) => (dispatch) => {
	dispatch(requestUpdate());
	const url = location.id;
	const employeeId = location.id.replace(/\/locations\/\d+/,'');
	location.id = 0;
	const onSuccess = json => {
		dispatch(receiveUpdate(fixUrlId(json,employeeId,NESTED_URL)));
	}
	const onError = error => {
		dispatch(createErrorCreator(PATCH_LOCATION_FAIL)(error))
	}
	return createFetch(url, HTTP_PATCH_METHOD, onSuccess, onError, location);
}

/**
 *  @param locationId is url id
 **/
export const deleteLocation = (locationId) => (dispatch) => {
	dispatch(requestDelete());
	const onSuccess = () => {
		dispatch(receiveDelete(locationId));
	}
	const onError = error => {
		dispatch(createErrorCreator(DELETE_LOCATION_FAIL)(error));
	}
	return createDeleteFetch(locationId, onSuccess, onError);
}