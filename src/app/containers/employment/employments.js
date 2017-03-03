import Employment from './Employment';

const employments = (state = [], action) => {
	switch (action.type) {
		case 'ADD_EMPLOYMENT':
			return [
				...state,
				new Employment(action)
			];
		case 'DELETE_EMPLOYMENT':
			return state.filter(item => {
				return item.id !== action.id;
			});
		case 'TOGGLE_EMPLOYMENT':
			return state.map(item => {
				if (item.id === action.id) {
					return {...item, activeInd: !item.activeInd};
				}
				return item;
			});
		case 'UPDATE_EMPLOYMENT':
			return state.map(item => {
				if (item.id === action.id) {
					return new Employment({
						...item,
						...action
					});
				}
				return item;
			});
		case 'CLEAN_EMPLOYMENTS': 
			return [];
		default:
			return state;
	}
};

export default employments;