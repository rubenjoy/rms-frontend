import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from './Main'; // Our custom react component
import {
	compose,
	createStore,
	applyMiddleware
} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rmsApp from './rmsApp';
import {getEmployees} from './async/employee/actions';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const middlewares = [thunk];
let redux_devtools = undefined;

if (process.env.NODE_ENV === 'development') {
	const createLogger = require('redux-logger');
	const logger = createLogger();
	middlewares.push(logger);

	redux_devtools = window.__REDUX_DEVTOOLS_EXTENSION__ &&
		window.__REDUX_DEVTOOLS_EXTENSION__();
}
const composedFunctions = redux_devtools !== undefined ?
	compose(applyMiddleware(...middlewares), redux_devtools) :
	compose(applyMiddleware(...middlewares));

// TODO serialized user session
const store = createStore(rmsApp, {}, composedFunctions);

store.dispatch(getEmployees(0));

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
render(
	<Provider store={store}>
		<Main />
	</Provider>
	, document.getElementById('app'));