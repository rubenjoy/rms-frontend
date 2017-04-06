export const ADD_LOCATION = 'ADD_LOCATION';
export const DELETE_LOCATION = 'DELETE_LOCATION';
export const UPDATE_LOCATION = 'UPDATE_LOCATION';
export const CLEAN_LOCATIONS = 'CLEAN_LOCATIONS';

export function addLocation(location) {
	return {
		type: ADD_LOCATION,
		...location
	};
}

export function removeLocation(id) {
	return {
		type: DELETE_LOCATION,
		id
	};
}

export function modifyLocation(location) {
	return {
		type: UPDATE_LOCATION,
		...location
	};
}

export function cleanLocations() {
	return {
		type: CLEAN_LOCATIONS
	}
}