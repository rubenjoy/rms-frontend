/**
 *  string functions
 *  camelize to make string into camel case
 **/

function camelize(str) {
	return str.split(' ').map(function (word) {
		return word.charAt(0).toUpperCase() +
			word.slice(1);
	}).join(' ');
}

export {camelize};