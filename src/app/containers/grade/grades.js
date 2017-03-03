import Grade from './Grade';

const grades = (state=[], action) => {
	switch (action.type) {
		case 'ADD_GRADE':
			return [
				...state,
				new Grade(action)
			];
		case 'CLEAN_GRADES':
			return [];
		case 'DELETE_GRADE':
			return state.filter(item => 
				(item.id !== action.id));
		case 'UPDATE_GRADE':
			return state.map(item => {
				if (item.id === action.id) {
					const newGrade = new Grade({
						...item,
						...action
					});
					return newGrade;
				}
				return item;
			});
		default:
			return state;
	}
};

export default grades;