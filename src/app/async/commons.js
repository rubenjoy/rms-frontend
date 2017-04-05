import fetch from 'isomorphic-fetch';
import {Promise} from 'es6-promise';

const URL_ADDR = 'http://localhost:8080/rms/api';

export const HTTP_GET_METHOD = 'GET';
export const HTTP_POST_METHOD = 'POST';
export const HTTP_PATCH_METHOD = 'PATCH';
export const HTTP_DELETE_METHOD = 'DELETE';

export const FETCH_FAIL = 'FETCH_FAIL';
export const PARSE_JSON_FAIL = 'PARSE_JSON_FAIL';

/**
 *	build url address
 *	@param relativeUrl
 *	@param params object which will be passed as get parameter
 *  @return String of url address
 **/
const buildUrl = (relativeUrl, params) => {
	let paramStr = '';
	for (const prop in params) {
		paramStr += paramStr.length > 0 ? '&' : '';
		paramStr += prop + '=' + params[prop];
	}
	const result = URL_ADDR + relativeUrl +
		(paramStr.length === 0 ? '' :
			'?'+paramStr);
	return result;
};

const catchFail = (type, errStatus, errText = "") => ({
	type, errStatus, errText
});

export const createErrorCreator = (actionType) => (error) => {
	if (error.message instanceof FetchError) {
		return catchFail(actionType, error.message.httpCode,
			error.message.message);
	}
	return catchFail(actionType, -1, error.message.toString());
}

/**
 *  build options for fetch service
 *  @param httpMethod 
 *  @param payload object, later be json stringified
 **/
const buildOptions = (httpMethod, payload, header = {}) => {
	let result = {
		method: httpMethod,
		headers: {
			'Content-Type': 'application/json',
			...header
		}
	}
	if (httpMethod != HTTP_GET_METHOD) {
		result.body = JSON.stringify(payload);
	}
	return result;
}

function FetchError(httpCode, message) {
	return {httpCode, message};
}

/**
 *  @param url address
 *  @param options for fetch
 *  @param resolve function (response) {}
 *  @param reject function (error) {}
 **/
const _createFetch = (url, options, resolve, reject) => {
	return fetch(url, options)
		.then(
			response => {
				if (response.ok) {
					return resolve(response);
				}
				const err = new Error(
					new FetchError(
						response.status, response.statusText
					)
				);
				return reject(err);
			},
			error => {
				return reject(error);
			}
		)
}

const _createJson = (response) => {
	return response.json();
}

const _dumpError = (error) => {
	console.error(error);
}

/**
 *  @param duration to delay in milliseconds
 **/
export function timeout(duration) {
	return new Promise((resolve) => {
		setTimeout(resolve, duration);
	});
}

/**
 *  @param url relative address
 *  @param resolve function (json) {}
 *  @param reject function(error) {}
 *  @param params for GET parameters
 **/
export function createGetFetch(url, resolve, reject, params = {}) {
	const options = buildOptions(HTTP_GET_METHOD, {});
	return _createFetch(buildUrl(url, params), options, _createJson, reject)
		.then(resolve,reject)
		.catch(_dumpError);
}


/**
 *  @param url relative address
 *  @param httpMethod
 *  @param resolve function (json) {}
 *  @param reject function (error) {}
 *  @param payload to be json stringified,
 **/
export function createFetch(url, httpMethod, resolve, reject, payload = {}) {
	const options = buildOptions(httpMethod, payload);
	return _createFetch(buildUrl(url, {}), options, _createJson, reject)
		.then(resolve, reject)
		.catch(_dumpError);
}

/**
 *  @param url relative address
 *  @param resolve function (response) {}
 *  @param reject function (error) {}
 **/
export function createDeleteFetch(url, onSuccess, onFail) {
	const options = buildOptions(HTTP_DELETE_METHOD, {});
	return _createFetch(buildUrl(url, {}), options, onSuccess, onFail)
		.catch(_dumpError);
}