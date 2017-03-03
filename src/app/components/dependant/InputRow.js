import React from 'react';
import {PropTypes} from 'react';

import ActionDelete from 'material-ui/svg-icons/action/delete';
import Checkbox from 'material-ui/Checkbox';
import DatePicker from 'material-ui/DatePicker';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';

import buildSelectField from '../commons/buildSelectField';
import {depTypeOptions} from '../../utils/optionsConfig';
import {genderOptions} from '../../utils/optionsConfig';

const defaultStyles = {
	formTr: {
		padding: '1px 0px 1px 0px'
	},
	formTd: {
		width: '118px',
		padding: '0px 2px 0px 0px'
	},
	formInput: {
		width: '118px'
	},
	formAction: {
		width: '32px',
		padding: '0px 0px 0px 0x'
	},
	formActive: {
		width: '58px',
		padding: '0px 2px 0px 0px',
	}
}

const GenderSelectField = (props) => {
	const SelectField = buildSelectField(
		genderOptions, 
		{
			...props,
			hintText: 'gender'
		},
	);
	return (<SelectField />);
};

const TypeSelectField = (props) => {
	const SelectField = buildSelectField(
		depTypeOptions,
		{
			...props,
			hintText: 'relation'
		},
	);

	return (<SelectField />);
}

const InputRow = (props) => {
	const styles = props.styles || defaultStyles;
	const dependant = props.dependant;

	return (
		<tr style={styles.formTr}>
			<td style={styles.formTd}>
				<TextField id="name" name="name"
					style={styles.formInput}
					floatingLabelText="&nbsp;"
					value={dependant.name} 
					onChange={(e, value) => {
						props.onChange({
							id: dependant.id,
							name: value
						});
					}}
				/>
			</td>
			<td style={styles.formTd}>
				<GenderSelectField id="gender" name="gender"
					style={styles.formInput}
					floatingLabelText="&nbsp;"
					value={dependant.gender} 
					onChange={(e, key, value) => {
						props.onChange({
							id: dependant.id,
							gender: value
						});
					}}
				/>
			</td>
			<td style={styles.formTd}>
				<DatePicker id="birthDate" name="birthDate"
					style={styles.formInput}
					textFieldStyle={{width: '100%'}}
					floatingLabelText="&nbsp;"
					value={dependant.birthDate}
					onChange={(e, date) => {
						const d = date || new Date();
						props.onChange({
							id: dependant.id,
							birthDate: d
						});
					}}
				/>
			</td>
			<td style={styles.formTd}>
				<TypeSelectField id="relation" name="relation"
					style={styles.formInput}
					floatingLabelText="&nbsp;"
					value={dependant.relation}
					onChange={(e, key, value) => {
						props.onChange({
							id: dependant.id,
							relation: value
						});
					}}
				/>
			</td>
			<td>
				<Checkbox id="activeInd" name="activeInd"
					style={styles.formActive}
					value={dependant.activeInd} 
					onCheck={(e, value) => {
						props.onChange({
							id: dependant.id,
							activeInd: value
						})
					}}
				/>
			</td>
			<td>
				<IconButton style={styles.formAction}
					tooltip="remove"
					onTouchTap={() => {
						props.deleteClick(dependant.id);
					}}
				>
					<ActionDelete />
				</IconButton>
			</td>
		</tr>
	);
};

InputRow.propTypes = {
	dependant: PropTypes.object.isRequired,
	deleteClick: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired
}

export default InputRow;