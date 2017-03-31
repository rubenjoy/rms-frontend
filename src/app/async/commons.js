const URL_ADDR = 'http://localhost:8080/rms/api/';

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
	type: type, 
	errStatus, errText
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

const _createFetch = (url, options, onSucces, onFail, dispatch) => {
	return fetch(url, options)
		.then(response => {
			if (response.ok) {
				return onSucces(response);
			}
			dispatch(onFail, response.status, response.statusText);
			return undefined;
		})
		.catch(error => {
			dispatch(FETCH_FAIL, onFail, error);
		})
}

const _createParseJson = (promise, onSucces, onFail, dispatch) => {
	return promise
		.then(json => {
			if (json != undefined) {
				dispatch(onSucces(json));
			}
			// TODO dispatch when json undefined
		})
		.catch(error => {
			console.error(error);
			dispatch(catchFail(PARSE_JSON_FAIL, onFail, error));
		});
}

const _createJson = (response) => {
	return response.json();
}

/**
 *  @param url relative addres
 *  @param onSuccess to get json data
 *  @param onFail Message
 *  @param dispatch
 *  @param params for GET parameters
 **/
export function createGetFetch(url, onSuccess, onFail, dispatch, params = {}) {
	const options = buildOptions(HTTP_GET_METHOD, {});
	const fetch = _createFetch(buildUrl(url, params), options, _createJson, onFail, dispatch)
	return _createParseJson(fetch, onSuccess, onFail, dispatch);
}

/**
 *  @param url relative address
 *  @param httpMethod
 *  @param payload to be json stringified,
 *         params for the get method @see buildUrl TODO not nice
 *  @param onSuccess action creator function
 *         json => {}
 *  @param onFail Message
 *  @param dispatch
 **/
export function createFetch(url, httpMethod, onSucces, onFail, dispatch, payload = {}) {
	const options = buildOptions(httpMethod, payload);
	const fetch = _createFetch(buildUrl(url, {}), options, _createJson, onFail, dispatch);
	return _createParseJson(fetch, onSucces, onFail, dispatch);
}

/**
 *  @param url relative address
 *  @param onSuccess action creator function, () => {}
 *  @param onFail Message
 *  @param dispatch
 *  @deprecated planned to be removed
 **/
export function createDeleteFetch(url, onSucces, onFail, dispatch) {
	const options = buildOptions(HTTP_DELETE_METHOD, {});
	return fetch(buildUrl(url), options)
		.then(response => {
			if (response.ok) {
				dispatch(onSucces());
				return undefined;
			}
			dispatch(catchFail(
				onFail, response.status, response.statusText
			));
		})
		.catch(error => {
			console.error(error);
			dispatch(catchFail(FETCH_FAIL, -1, error));
		})
}
