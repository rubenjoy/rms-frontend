function addAddress(address) {
	return {
		type: 'ADD_ADDRESS',
		...address
	};
}

function modifyAddress(address) {
	return {
		type: 'UPDATE_ADDRESS',
		...address
	};
}

function removeAddress(id) {
	return {
		type: 'DELETE_ADDRESS',
		id
	};
}

export {addAddress, modifyAddress, removeAddress};