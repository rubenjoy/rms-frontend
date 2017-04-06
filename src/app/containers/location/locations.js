import Location from './Location';

import {
	ADD_LOCATION,
	CLEAN_LOCATIONS,
	DELETE_LOCATION,
	UPDATE_LOCATION
} from './locationsAction';
import {
	DELETE_LOCATION_SUCCESS,
	PATCH_LOCATION_SUCCESS,
	POST_LOCATION_SUCCESS
} from '../../async/location/actions';

function locations(state = [], action) {
	switch (action.type) {
		case POST_LOCATION_SUCCESS:
		case ADD_LOCATION:
			return [
				...state,
				new Location(action)
			];
		case DELETE_LOCATION_SUCCESS:
		case DELETE_LOCATION:
			return state.filter(item =>
				(item.id !== action.id)
			);
		case PATCH_LOCATION_SUCCESS:
		case UPDATE_LOCATION:
			return state.map(item => {
				if (item.id === action.id) {
					return new Location({
						...item,
						...action
					});
				}
				return item;
			});
		case CLEAN_LOCATIONS:
			return [];
		default:
			return state;
	}
}

export default locations;