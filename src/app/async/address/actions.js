require('isomorphic-fetch');

import {
	createDeleteFetch,
	createErrorCreator,
	createFetch,
	createGetFetch,
	HTTP_PATCH_METHOD,
	HTTP_POST_METHOD
} from './../commons';

export const GET_ADDRESSES = 'GET_ADDRESSES';
export const GET_ADDRESSES_SUCCESS = 'GET_ADDRESSES_SUCCESS';
export const GET_ADDRESSES_FAIL = 'GET_ADDRESSES_FAIL';

export const POST_ADDRESS = 'POST_ADDRESS';
export const POST_ADDRESS_SUCCESS= 'POST_ADDRESS_SUCCESS';
export const POST_ADDRESS_FAIL = 'POST_ADDRESS_FAIL';

export const PATCH_ADDRESS = 'PATCH_ADDRESS';
export const PATCH_ADDRESS_SUCCESS  = 'PATCH_ADDRESS_SUCCESS';
export const PATCH_ADDRESS_FAIL = 'PATCH_ADDRESS_FAIL';

export const DELETE_ADDRESS_ASYNC = 'DELETE_ADDRESS_ASYNC';
export const DELETE_ADDRESS_SUCCESS = 'DELETE_ADDRESS_SUCCESS';
export const DELETE_ADDRESS_FAIL = 'DELETE_ADDRESS_FAIL';

const requestAddresses = () => ({
	type: GET_ADDRESSES
})

const receiveAddresses = (addresses) => ({
	type: GET_ADDRESSES_SUCCESS,
	addresses
})

const requestCreate = () => ({
	type: POST_ADDRESS
})

const receiveCreate = (address) => ({
	type: POST_ADDRESS_SUCCESS,
	...address
})

const requestUpdate = () => ({
	type: PATCH_ADDRESS
})

const receiveUpdate = (address) => ({
	type: PATCH_ADDRESS_SUCCESS,
	...address
})

const requestDelete = () => ({
	type: DELETE_ADDRESS_ASYNC
})

const receiveDelete = (id) => ({
	type: DELETE_ADDRESS_SUCCESS,
	id
})

const NESTED_URL = '/addresses';

/**
 *  @param employeeId is url id
 **/
export const getAddresses = (employeeId) => (dispatch) => {
	dispatch(requestAddresses());
	const url = employeeId + NESTED_URL;
	const onSuccess = json =>{
		dispatch(receiveAddresses(json));
	}
	const onError = error => {
		dispatch(createErrorCreator(GET_ADDRESSES_FAIL)(error));
	}
	return createGetFetch(url, onSuccess, onError, {});
}

/**
 *  @param employeeId url id
 *  @param address
 **/
export const postAddress = (employeeId, address) => (dispatch) => {
	dispatch(requestCreate());
	const url = employeeId + NESTED_URL;
	const onSuccess = json => {
		dispatch(receiveCreate(json));
	}
	const onError = error => {
		dispatch(createErrorCreator(POST_ADDRESS_FAIL)(error));
	}
	return createFetch(url, HTTP_POST_METHOD, onSuccess, onError, address);
}

/**
 *  @param address object with id url
 **/
export const patchAddress = (address) => (dispatch) => {
	dispatch(requestUpdate());
	const url = address.id;
	address.id = 0;
	const onSuccess = json => {
		dispatch(receiveUpdate(json));
	}
	const onError = error => {
		dispatch(createErrorCreator(PATCH_ADDRESS_FAIL)(error));
	}
	return createFetch(url, HTTP_PATCH_METHOD, onSuccess, onError, address);
}

/**
 *  @param addressId relative url
 **/
export const deleteAddress = (addressId) => (dispatch) => {
	dispatch(requestDelete());
	const onSuccess = () => {
		dispatch(receiveDelete(addressId));
	}
	const onError = error => {
		dispatch(createErrorCreator(DELETE_ADDRESS_FAIL)(error));
	}
	return createDeleteFetch(addressId, onSuccess, onError);
}