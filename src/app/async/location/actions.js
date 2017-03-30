require('isomorphic-fetch');

import {
	createDeleteFetch,
	createFetch,
	HTTP_GET_METHOD,
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

export const DELETE_LOCATION = 'DELETE_LOCATION';
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
	tyoe: POST_LOCATION_SUCCESS,
	location
})

const requestUpdate = () => ({
	type: PATCH_LOCATION
})

const receiveUpdate = (location) => ({
	type: PATCH_LOCATION_SUCCESS,
	location
})

const requestDelete = () => ({
	type: DELETE_LOCATION
})

const receiveDelete = () => ({
	type: DELETE_LOCATION_SUCCESS
})

/**
 *  @param employeeId is url id
 **/
export const getLocations = (employeeId) => (dispatch) => {
	dispatch(requestLocations());
	const url = employeeId + NESTED_URL;
	return createFetch(url, HTTP_GET_METHOD, receiveLocations,
		GET_LOCATIONS_FAIL, dispatch);
}

/**
 *  @param employeeId
 *  @param location
 **/
export const postLocation = (employeeId, location) => (dispatch) => {
	dispatch(requestCreate());
	const url = employeeId + NESTED_URL;
	return createFetch(url, HTTP_POST_METHOD, receiveCreate,
		POST_LOCATION_FAIL, dispatch, location);
}

/**
 *  @param location
 **/
export const patchLocation = (location) => (dispatch) => {
	dispatch(requestUpdate());
	const url = location.id;
	location.id = 1;
	return createFetch(url, HTTP_PATCH_METHOD, receiveUpdate,
		PATCH_LOCATION_FAIL, dispatch, location);
}

/**
 *  @param locationId is url id
 **/
export const deleteLocation = (locationId) => (dispatch) => {
	dispatch(requestDelete());
	return createDeleteFetch(locationId, receiveDelete,
		DELETE_LOCATION_FAIL, dispatch);
}