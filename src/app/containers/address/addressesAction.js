export const ADD_ADDRESS = 'ADD_ADDRESS';
export const DELETE_ADDRESS = 'DELETE_ADDRESS';
export const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
export const CLEAN_ADDRESS = 'CLEAN_ADDRESS';

export function addAddress(address) {
	return {
		type: ADD_ADDRESS,
		...address
	};
}

export function modifyAddress(address) {
	return {
		type: UPDATE_ADDRESS,
		...address
	};
}

export function removeAddress(id) {
	return {
		type: DELETE_ADDRESS,
		id
	};
}

export function cleanAddress() {
	return {
		type: CLEAN_ADDRESS
	};
}