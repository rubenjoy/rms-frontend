import Promise from 'es6-promise';
Promise.polyfill();

const DEFAULT_DURATION = 10500;
/**
 *  return function(value) which return Promise
 *  @param duration to delay in milliseconds
 **/
export const delayWithPromise = (duration = DEFAULT_DURATION) => (value) => {
	return new Promise((resolve) => {
		setTimeout(resolve(value), duration);
	});
}

/**
 *  delay func execution
 *  @param func to be executed
 *  @param duration to delay in milliseconds
 *  @deprecated
 **/
const delay = (func, duration = DEFAULT_DURATION) => {
	if (typeof func !== 'function') {
		throw new Error('func is not a function.');
	}
	setTimeout(func(), duration);
}

export default delay;