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

function cleanAddress() {
	return {
		type: 'CLEAN_ADDRESS'
	};
}

export {addAddress, cleanAddress, modifyAddress, removeAddress};