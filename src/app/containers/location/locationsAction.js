function addLocation(location) {
	return {
		type: 'ADD_LOCATION',
		...location
	};
}

export {addLocation};

function removeLocation(id) {
	return {
		type: 'DELETE_LOCATION',
		id
	};
}

export {removeLocation}

function modifyLocation(location) {
	return {
		type: 'UPDATE_LOCATION',
		...location
	};
}

export {modifyLocation};