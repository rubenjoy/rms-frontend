function replaceEmp(emp) {
	return {
		type: 'REPLACE_EMP',
		...emp
	};
}

export {replaceEmp};

function modifyEmp(emp) {
	return {
		type: 'UPDATE_EMP',
		...emp
	};
}

export {modifyEmp};

function cleanEmp() {
	return {
		type: 'CLEAN_EMP'
	};
}

export {cleanEmp};