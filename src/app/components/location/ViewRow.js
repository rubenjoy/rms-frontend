import React, {PropTypes} from 'react';

import ActionDelete from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';

import {formater} from '../../utils/date';
import {locationArray} from '../../utils/optionsConfig';
import ModifyLocationDialog from './ModifyLocationDialog';
import {officeAddresses} from '../../utils/constValues';

const defaultStyles = {
	root: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'stretch',
		width: '640px'
	},
	divLeft: {
		flex: '0 1 160px',
		fontWeight: '500'
	},
	divCenter: {
		flex: '2 1 380px',
		fontWeight: '300'
	},
	divActions: {
		flex: '0 1 96px'
	}
}

const ViewRow = (props) => {
	const location = props.location;
	const styles = props.styles || defaultStyles;

	return (
		<div className="location-view-row-root"
			style={styles.root}
		>
			<div className="location-view-row-left"
				style={styles.divLeft}
			>
				<table><tbody>
					<tr>
						<td>
							{formater.format(location.startDate)}
						</td>
						<td>
							- {location.activeInd ? 'Till Present' : 
								formater.format(location.endDate)}
						</td>
					</tr>
				</tbody></table>
			</div>
			<div className="location-view-row-center"
				style={styles.divCenter}
			>
				<table><tbody>
					<tr><td>
						Office Location
					</td></tr>
					<tr><td>
						{locationArray[location.branchOffice]}
					</td></tr>
					<tr><td>
						Address
					</td></tr>
					<tr><td>
						{officeAddresses[location.branchOffice]}
					</td></tr>
				</tbody></table>
			</div>
			<div className="location-view-row-actions"
				style={styles.divActions}
			>
				<ModifyLocationDialog location={location}
					onChange={props.onChange}
				/>
				<IconButton onTouchTap={() => {
								props.deleteClick(location.id);
							}}
				>
					<ActionDelete />
				</IconButton>
			</div>
		</div>
	);
}

ViewRow.propTypes = {
	location: PropTypes.object.isRequired,
	deleteClick: PropTypes.func
}

export default ViewRow;