function addGrade(grade) {
	return {
		type: 'ADD_GRADE',
		...grade
	};
}

export {addGrade};

function cleanGrades() {
	return {
		type: 'CLEAN_GRADES'
	};
}

export {cleanGrades};

function removeGrade(id) {
	return {
		type: 'DELETE_GRADE',
		id
	};
}


export {removeGrade};

function modifyGrade(grade) {
	return {
		type: 'UPDATE_GRADE',
		...grade
	};
}

export {modifyGrade};