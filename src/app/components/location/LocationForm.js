import React, {PropTypes} from 'react';

import DatePicker from 'material-ui/DatePicker';
import Toggle from 'material-ui/Toggle';

import buildSelectField from '../commons/buildSelectField';
import {locationOptions} from '../../utils/optionsConfig';

const defaultStyles = {
	root: {
		width: '640px',
		margin: '0 auto'
	},
	formTr: {
		padding: '0px 0px 1px 0px'
	},
	formTd: {
		width: '300px',
		padding: '0px 3px 0px 0px'
	},
	formInput: {
		width: '300px'
	},
};

const LocationSelectField = (props) => {
	const SelectField = buildSelectField(
		locationOptions,
		{
			...props,
			hintText: 'Branch Office'
		}
	);
	return (<SelectField />);
};

const LocationForm = (props) => {
	const styles = props.styles || defaultStyles;
	const location = props.location;

	return (
		<form style={styles.root}>
			<table><tbody>
				<tr style={styles.formTr}>
					<td style={styles.formTd}>
						<DatePicker id="startDate" name="startDate"
							style={styles.formInput}
							floatingLabelText="Start Date"
							value={location.startDate}
							onChange={(e,date) => {
								const d = date || new Date();
								props.onChange({
									startDate: d,
									id: location.id
								});
							}}
						/>
					</td>
					<td style={styles.formTd}>
						<DatePicker id="endDate" name="endDate"
							style={styles.formInput}
							floatingLabelText="End Date"
							value={location.endDate}
							onChange={(e,date) => {
								const d = date || new Date();
								props.onChange({
									endDate: d,
									id: location.id
								});
							}}
							disabled={location.activeInd}
						/>
					</td>
				</tr>
				<tr style={styles.formTr}>
					<td style={styles.formTd}>
					</td>
					<td style={styles.formTd}>
						<Toggle id="activeInd" name="activeInd"
							label="till present"
							toggled={location.activeInd}
							onToggle={(e,value) => {
								props.onChange({
									activeInd: value,
									id: location.id
								});
							}}
						/>
					</td>
				</tr>
				<tr style={styles.formTr}>
					<td style={{...styles.formTd, colspan: 2}}>
						<LocationSelectField id="branchOffice" name="branchOffice"
							style={styles.formInput}
							floatingLabelText="Branch Office"
							value={location.branchOffice}
							onChange={(e,key,value) => {
								props.onChange({
									branchOffice: value,
									id: location.id
								});
							}}
						/>
					</td>
				</tr>
			</tbody></table>
		</form>
	);
}

LocationForm.propTypes = {
	location: PropTypes.object.isRequired,
	onChange: PropTypes.func.isRequired,
	styles: PropTypes.object,
	errors: PropTypes.object
}

export default LocationForm;