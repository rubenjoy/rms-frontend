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
 *  @param onSuccess function (response) {}
 *  @param onFail TODO function (error) {}
 **/
const _createFetch = (url, options, onSucces) => {
	return fetch(url, options)
		.then(
			response => {
				if (response.ok) {
					return onSucces(response);
				}
				console.error(response.statusText);
				throw new Error('HTTP Status: '+response.status);
			},
			error => {
				throw new Error(error.message);
			}
		)
}

/**
 *  @param promise 
 *  @param onSuccess function (json) {}
 *  @param onFail TODO function (error) {}
 *  @param dispatch TODO must be omitted
 **/
const _createParseJson = (promise, onSucces, onFail, dispatch) => {
	return promise
		.then(
			json => {
				dispatch(onSucces(json));
			},
			error => {
				dispatch(catchFail(FETCH_FAIL, -1, error.message));
			}
		);
}

const _createJson = (response) => {
	return response.json();
}

/**
 *  @param url relative address
 *  @param onSuccess function (json) {}
 *  @param onFail Message TODO become function(error) {}
 *  @param dispatch TODO must be omitted
 *  @param params for GET parameters
 **/
export function createGetFetch(url, onSuccess, onFail, dispatch, params = {}) {
	const options = buildOptions(HTTP_GET_METHOD, {});
	const fetch = _createFetch(buildUrl(url, params), options, _createJson)
	return _createParseJson(fetch, onSuccess, onFail, dispatch);
}

/**
 *  @param url relative address
 *  @param httpMethod
 *  @param payload to be json stringified,
 *  @param onSuccess function (json) {}
 *  @param onFail Message TODO replaced with function (error) {}
 *  @param dispatch TODO must be omitted
 **/
export function createFetch(url, httpMethod, onSucces, onFail, dispatch, payload = {}) {
	const options = buildOptions(httpMethod, payload);
	const fetch = _createFetch(buildUrl(url, {}), options, _createJson);
	return _createParseJson(fetch, onSucces, onFail, dispatch);
}

/**
 *  @param url relative address
 *  @param onSuccess function (response) {}
 *  @param onFail Message TODO replaced with function (error) {}
 *  @param dispatch TODO must be omitted
 **/
export function createDeleteFetch(url, onSuccess, onFail, dispatch) {
	const options = buildOptions(HTTP_DELETE_METHOD, {});
	return _createFetch(buildUrl(url, {}), options, onSuccess)
		.catch(error => {
			dispatch(catchFail(onFail, -1, error.message));
		});
}
