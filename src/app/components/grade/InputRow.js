import React from 'react';
import {PropTypes} from 'react';

import ActionDelete from 'material-ui/svg-icons/action/delete';
import DatePicker from 'material-ui/DatePicker';
import IconButton from 'material-ui/IconButton';

import buildSelectField from '../commons/buildSelectField';
import {devStageOptions} from '../../utils/optionsConfig';
import {gradeOptions} from '../../utils/optionsConfig';

const defaultStyles = {
	formTr: {
		padding: '1px 0px 1px 0px'
	},
	formTd: {
		width: '135px',
		padding: '0px 5px 0px 0px'
	},
	formInput: {
		width: '135px'
	},
	formAction: {
		width: '48px',
		padding: '0px 0px 0px 0px'
	},
};

const DevStageSelectField = (props) => {
	const SelectField = buildSelectField(
		devStageOptions,
		{
			...props,
			hintText: 'dev stage'
		}
	);
	return (<SelectField />);
};

const GradeSelectField = (props) => {
	const SelectField = buildSelectField(
		gradeOptions,
		{
			...props,
			hintText: 'grade'
		}
	);
	return (<SelectField />);
}

const InputRow = (props) => {
		const styles = props.styles || defaultStyles;
		const grade = props.grade;

		return (
			<tr style={styles.formTr}>
				<td style={styles.formTd}>
					<DevStageSelectField id="devStage" name="devStage"
						style={styles.formInput} 
						floatingLabelText="&nbsp;"
						value={grade.devStage}
						onChange={(e, key, value) => {
							props.onChange({
								id: grade.id,
								devStage: value
							})
						}}/>
				</td>
				<td style={styles.formTd}>
					<GradeSelectField id="grade" name="grade"
						style={styles.formInput} 
						floatingLabelText="&nbsp;"
						value={grade.grade}
						onChange={(e, key, value) => {
							props.onChange({
								id: grade.id,
								grade: value
							})
						}}/>
				</td>
				<td style={styles.formTd}>
					<DatePicker id="startDate" name="startDate"
						hintText="start date"
						floatingLabelText="&nbsp;"
						style={styles.formInput} 
						textFieldStyle={{width: '100%'}}
						value={grade.startDate}
						onChange={(e, date) => {
							const d = date || new Date();
							props.onChange({
								startDate: d,
								id: grade.id
							});
						}}/>
				</td>
				<td style={styles.formTd}>
					<DatePicker id="endDate" name="endDate"
						hintText="end date"
						style={styles.formInput} 
						textFieldStyle={{width: '100%'}}
						floatingLabelText="&nbsp;"
						value={grade.endDate}
						onChange={(e,date) => {
							const d = date || new Date();
							props.onChange({
								endDate: d,
								id: grade.id
							})
						}}/>
				</td>
				<td style={styles.formAction}>
					<IconButton tooltip="remove"
						onTouchTap={() =>
							props.deleteClick(grade.id)}
					>
						<ActionDelete />
					</IconButton>
				</td>
			</tr>
		)
}

InputRow.propTypes = {
	deleteClick: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	grade: PropTypes.object.isRequired
}

export default InputRow;

