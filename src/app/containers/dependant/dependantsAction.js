function addDependant(dependant) {
	return {
		type: 'ADD_DEPENDANT',
		...dependant
	};
}

export {addDependant};

const cleanDependants = () => ({
	type: 'CLEAN_DEPENDANTS'
});

export {cleanDependants};

const removeDependant = (id) => ({
	type: 'DELETE_DEPENDANT',
	id
});

export {removeDependant};

const modifyDependant = (dependant) => ({
	type: 'UPDATE_DEPENDANT',
	...dependant
});

export {modifyDependant};