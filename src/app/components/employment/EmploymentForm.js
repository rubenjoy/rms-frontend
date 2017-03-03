import React, {PropTypes} from 'react';

import ActionDelete from 'material-ui/svg-icons/action/delete';
import ContentAdd from 'material-ui/svg-icons/content/add';
import DatePicker from 'material-ui/DatePicker';
import IconButton from 'material-ui/IconButton';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';

const defaultStyles = {
	root: {
		margin: '0 auto',
	},
	formTr: {

	},
	formTd: {
		width: '300px',
	},
	formInput: {
		width: '300px'
	},
	doubleInput: {
		width: '480px'
	}, 
	ul: {
		width: '600px'
	}
}

const emptyError = {
	employer: undefined,
	jobTitle: undefined
}

const EmploymentForm = ({employment, styles, onChange, errors}) => {
	const style = styles || defaultStyles;
	const errorMsg = {...emptyError, ...errors};
	let i = 0;
	const jobDescInput = employment.jobDesc.length === 0 ?
		<div>
			Currently employment's job descriptions are empty.
			Please add new empty job description.
		</div> :
		employment.jobDesc.map(item => {
			const c = i++;
			return (
			<li key={c}>
			<TextField id={'jobDesc_'+c} name={'jobDesc_'+c}
				style={style.doubleInput}
				hintText='Job Description'
				value={item}
				onChange={(e,value) => {
					let cnt = 0;
					onChange({
						jobDesc: employment.jobDesc.map(
							item => {
								if (cnt++ === c) {
									return value
								}
								return item
							}
						),
						id: employment.id
					})
				}}
			/>
			<IconButton onTouchTap={() =>
					onChange({
						jobDesc: employment.jobDesc.slice(0,c).
									concat(employment.jobDesc.slice(c+1)),
						id: employment.id
					})
				}
			>
				<ActionDelete />
			</IconButton>
			</li>
			);
		});

	return (
		<form style={style.root}>
			<table><tbody>
				<tr style={style.formTr}>
					<td style={style.formTd}>
						<DatePicker id="startDate" name="startDate"
							style={style.formInput}
							floatingLabelText="Start Date"
							value={employment.startDate}
							onChange={(e,date) => {
								const d = date || new Date();
								onChange({
									startDate: d,
									id: employment.id
								})
							}}
						/>
					</td>
					<td style={style.formTd}>
						<DatePicker id="endDate" name="endDate"
							style={style.formInput}
							floatingLabelText="End Date"
							value={employment.endDate}
							onChange={(e,date) => {
								const d = date || new Date();
								onChange({
									endDate: d,
									id: employment.id
								})
							}}
							disabled={employment.activeInd}
						/>
					</td>
				</tr>
				<tr style={style.formTr}>
					<td style={style.formTd}>
					</td>
					<td style={style.formTd}>
						<Toggle id="activeInd" name="activeInd"
							label="till present"
							toggled={employment.activeInd}
							onToggle={(e,value) => {
								onChange({
									activeInd: value,
									id: employment.id
								})
							}}
						/>
					</td>
				</tr>
				<tr style={style.formTr}>
					<td style={style.formTd}>
						<TextField id="employer" name="employer"
							style={style.formInput}
							floatingLabelText="Employer"
							value={employment.employer}
							errorText={errorMsg.employer}
							onChange={(e, value) => onChange({
								employer: value,
								id: employment.id
							})}
						/>
					</td>
					<td style={style.formTd}>
						<TextField id="jobTitle" name="jobTitle"
							style={style.formInput}
							floatingLabelText="Job Title"
							value={employment.jobTitle}
							errorText={errorMsg.jobTitle}
							onChange={(e, value) => onChange({
								jobTitle: value,
								id: employment.id
							})}
						/>
					</td>
				</tr>
			</tbody></table>
			<h6>Job Descriptions</h6>
			<ul style={style.ul}>
				{jobDescInput}
				<IconButton onTouchTap={() => {
						onChange({
							jobDesc: employment.jobDesc.concat(''),
							id: employment.id
						})
					}}
					tooltip="Add Empty Job Description"
				>
					<ContentAdd />
				</IconButton>
				Empty Job Description
			</ul>
		</form>
	);
}
EmploymentForm.propTypes = {
	employment: PropTypes.object.isRequired,
	onChange: PropTypes.func.isRequired,
	styles: PropTypes.object,
	errors: PropTypes.object
}

export default EmploymentForm;