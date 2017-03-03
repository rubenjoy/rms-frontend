function createEmp(emp) {
	return {
		type: 'CREATE_EMP',
		...emp
	}
}

function buildEmployee(emp) {
	return {
		type: 'BUILD_EMPLOYEE',
		...emp
	}
}

export {createEmp, buildEmployee};