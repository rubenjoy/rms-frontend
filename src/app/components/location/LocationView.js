import React, {PropTypes} from 'react';

import {connect} from 'react-redux';

import Divider from 'material-ui/Divider';

import CreateLocationDialog from './CreateLocationDialog';
import {modifyLocation,
		removeLocation} from '../../containers/location/locationsAction';
import ViewRow from './ViewRow';

const defaultStyles = {
	root: {}
}

const mapStateToProps = (state) => ({
	employee: state.currentEmp,
	locations: state.locations
})
const mapDispatchToProps = (dispatch) => ({
	deleteClick: (id) => {
		dispatch(removeLocation(id));
	},
	onChange: (location) => {
		dispatch(modifyLocation(location));
	}
})

const LocationView = (props) => {
	const styles = props.styles || defaultStyles;
	const locations = props.locations;

	return (
		<div style={styles.root}>
			{ locations.length === 0 ?
				<div>
					Currently the employee's office location history is empty.
					Please add new office location record first.
				</div> :
				locations.map(item =>
					<div key={item.id}>
						<ViewRow location={item}
							deleteClick={props.deleteClick}
							onChange={props.onChange}
						/>
						<Divider />
					</div>
				)
			}
			<CreateLocationDialog />
		</div>
	);
}

LocationView.propTypes = {
	locations: PropTypes.array.isRequired,
}

export default connect(mapStateToProps,mapDispatchToProps)(
	LocationView
);