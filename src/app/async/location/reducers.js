import {GET_LOCATIONS_SUCCESS} from './actions';
import Location from '../../containers/location/Location';

export const locations = (state = [], action) => {
	switch (action.type) {
		case GET_LOCATIONS_SUCCESS: {
			let existingIds = state
				.filter(location => location.id !== undefined)
				.map(location => location.id);
			let locations = [...state];
			action.locations.forEach(location => {
				if (existingIds.indexOf(location.id) < 0) {
					locations.push(new Location({
						...location, employeeId: location.id
					}));
					existingIds.push(location.id);
				}
			})
			return locations;
		}
		default: 
			return state;
	}
}