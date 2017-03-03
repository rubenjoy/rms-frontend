
function addEmployment(employment) {
	return {
		type: 'ADD_EMPLOYMENT',
		...employment
	};
}

export {addEmployment};

function removeEmployment(id) {
	return {
		type: 'DELETE_EMPLOYMENT',
		id
	};
}

export {removeEmployment};

function toggleEmployment(id) {
	return {
		type: 'TOGGLE_EMPLOYMENT',
		id
	};
}

export {toggleEmployment};

function modifyEmployment(employment) {
	return {
		type: 'UPDATE_EMPLOYMENT',
		...employment
	};
}

export {modifyEmployment};

function cleanEmployments() {
	return {
		type: 'CLEAN_EMPLOYMENTS'
	}
}

export {cleanEmployments};