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
const buildOptions = (httpMethod, payload) => {
	let result = {
		method: httpMethod,
		headers: {
			'Content-Type': 'application/json'
		}
	}
	if (httpMethod != HTTP_GET_METHOD) {
		result.body = JSON.stringify(payload);
	}
	return result;
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
export function createFetch (url, httpMethod, onSucces, onFail, dispatch, payload = {}) {
	const options = buildOptions(httpMethod, payload);
	return fetch(buildUrl(url, payload), options)
		.then(response => {
			if (response.ok) {
				return response.json();
			}
			dispatch(
				catchFail(onFail, response.status, response.statusText)
			);
			return undefined;
		})
		.catch(error => {
			dispatch(
				catchFail(FETCH_FAIL, -1, error)
			);
		})
		.then(json => {
			if(json != null) {
				console.log(json);
				dispatch(onSucces(json));
			}
		})
		.catch(error => {
			console.error(error);
			dispatch(
				catchFail(PARSE_JSON_FAIL, -2, error)
			);
		});
}

/**
 *  @param url relative address
 *  @param onSuccess action creator function, () => {}
 *  @param onFail Message
 *  @param dispatch
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
