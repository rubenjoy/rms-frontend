import fetch from 'isomorphic-fetch';
import Promise from 'es6-promise';
Promise.polyfill();

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

/**
 *  @param json to be fixed
 *	@param employeeId url id
 *  @param parentUrl for this jsonified weak entity
 **/
export const fixUrlId = (json, employeeId, parentUrl) => {
	if (json.id.match(/^\d+$/)) {
		json.id = employeeId + parentUrl + '/' + json.id
	}
	return json;
}

export const createErrorCreator = (actionType) => (error) => {
	if (typeof error.name === 'number') {
		return catchFail(actionType, error.name, error.message);
	}
	if (error.name === 'FetchError') {
		return catchFail(actionType, error.code, error.message);
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
				let err = new Error(response.statusText);
				err.name = response.status;
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
const _throwAgain = (error) => {
	throw error;
}

/**
 *  @param url relative address
 *  @param resolve function (json) {}
 *  @param reject function(error) {}
 *  @param params for GET parameters
 **/
export function createGetFetch(url, resolve, reject, params = {}) {
	const options = buildOptions(HTTP_GET_METHOD, {});
	return _createFetch(buildUrl(url, params), options, _createJson, _throwAgain)
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
	return _createFetch(buildUrl(url, {}), options, _createJson, _throwAgain)
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