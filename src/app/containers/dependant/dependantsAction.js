export const ADD_DEPENDANT = 'ADD_DEPENDANT';
export const CLEAN_DEPENDANTS = 'CLEAN_DEPENDANTS';
export const DELETE_DEPENDANT = 'DELETE_DEPENDANT';
export const UPDATE_DEPENDANT = 'UPDATE_DEPENDANT';

export const addDependant = (dependant) => ({
		type: ADD_DEPENDANT,
		...dependant
})

export const cleanDependants = () => ({
	type: CLEAN_DEPENDANTS
});

export const removeDependant = (id) => ({
	type: DELETE_DEPENDANT,
	id
});

export const modifyDependant = (dependant) => ({
	type: UPDATE_DEPENDANT,
	...dependant
});