import React from 'react';
import {PropTypes} from 'react';

import DatePicker from 'material-ui/DatePicker';
import muiThemeable from 'material-ui/styles/muiThemeable';
import TextField from 'material-ui/TextField';

import DivisionSelectField from '../commons/DivisionSelectField';
import GenderSelectField from '../commons/GenderSelectField';
import GradeSelectField from '../commons/GradeSelectField';
import MaritalStatusSelectField from '../commons/MaritalStatusSelectField';
import NationalitySelectField from '../commons/NationalitySelectField';

const defaultStyles = (/*muiTheme*/) => ({
	root: {
		margin: '0 auto'
	},
	formTr: {

	},
	formTd: {
		width: '300px'
	},
	formInput: {
		width: '300px',

	},
	formAvatar:  {
		width: '120px'
	}
});

const emptyError = {
	firstName: undefined,
	lastName: undefined,
	birthDate: undefined,
	suspendDate: undefined,
	hireDate: undefined,
	email: undefined,
	phone: undefined,
	status: undefined,
	nationality: undefined,
	maritalStatus: undefined,
	grade: undefined,
	gender: undefined
};

const EmployeeForm = (props) => {
	const styles = props.styles || defaultStyles(props.muiTheme);
	const employee = props.emp;
	const errorMsg = {...emptyError, ...(props.errors)};

	return (
		<form style={styles.root}><table><tbody>
			<tr style={styles.formTr}>
				<td style={styles.formTd}>
					<TextField id="firstName" name="firstName"
						style={styles.formInput}
						hintStyle={styles.formInput}
						inputStyle={styles.formInput}
						hintText="First Name"
						floatingLabelText="First Name"
						value={employee.firstName}
						errorText={errorMsg.firstName}
						onChange={(e, value) => props.onChange({
							id: employee.id, 
							firstName: value
						})}
					/>
				</td>
				<td style={styles.formTd}>
					<TextField id="subDivision" name="subDivision"
						style={styles.formInput}
						hintStyle={styles.formInput}
						inputStyle={styles.formInput}
						hintText="Sub Division"
						floatingLabelText="Sub Division"
						value={employee.subDivision}
						errorText={errorMsg.subDivision}
						onChange={(e,value) => props.onChange({
							id: employee.id,
							subDivision: value
						})}
					/>
				</td>
			</tr>
			<tr style={styles.formTr}>
				<td style={styles.formTd}>
					<TextField id="lastName" name="lastName"
						style={styles.formInput}
						hintStyle={styles.formInput}
						inputStyle={styles.formInput}
						hintText="Last Name"
						floatingLabelText="Last Name"
						value={employee.lastName}
						errorText={errorMsg.lastName}
						onChange={(e, value) => props.onChange({
							id: employee.id, 
							lastName: value
						})}
					/>
				</td>
				<td style={styles.formTd}>
					<TextField id="status" name="status"
						style={styles.formInput}
						hintStyle={styles.formInput}
						inputStyle={styles.formInput}
						hintText="Status"
						floatingLabelText="Status"
						value={employee.status}
						errorText={errorMsg.status}
						onChange={(e,value) => props.onChange({
							id: employee.id,
							status: value
						})}
					/>
				</td>
			</tr>
			<tr style={styles.formTr}>
				<td style={styles.formTd}>
					<GenderSelectField id="gender" name="gender"
						style={styles.formInput}
						value={employee.gender}
						errorText={errorMsg.gender}
						onChange={(e,key,value) => props.onChange({
							id: employee.id,
							gender: value
						})}
					/>
				</td>
				<td style={styles.formTd}>
					<DatePicker id="suspendDate" name="suspendDate"
						style={styles.formInput}
						hintStyle={styles.formInput}
						inputStyle={styles.formInput}
						floatingLabelText="Suspend Date"
						value={employee.suspendDate}
						onChange={(e,date) => {
							const d = date || new Date();
							props.onChange({
								id: employee.id, 
								suspendDate: d
							});
						}}
					/>
				</td>
			</tr>
			<tr style={styles.formTr}>
				<td style={styles.formTd}>
					<DatePicker id="birthDate" name="birthDate"
						style={styles.formInput}
						hintStyle={styles.formInput}
						inputStyle={styles.formInput}
						floatingLabelText="Date of Birth"
						value={employee.birthDate}
						onChange={(e,date) =>  {
							const d = date || new Date();
							props.onChange({
								id: employee.id,
								birthDate: d
							})
						}}
					/>
				</td>
				<td style={styles.formTd}>
					<DatePicker id="hireDate" name="hireDate"
						style={styles.formInput}
						hintStyle={styles.formInput}
						inputStyle={styles.formInput}
						floatingLabelText="Hire Date"
						value={employee.hireDate}
						onChange={(e,date) => {
							const d = date || new Date();
							props.onChange({
								id: employee.id,
								birthDate: d
							})
						}}
					/>
				</td>
			</tr>
			<tr style={styles.formTr}>
				<td style={styles.formTd}>
					<NationalitySelectField id="nationality"
						style={styles.formInput}
						name="nationality"
						value={employee.nationality}
						errorText={errorMsg.nationality}
						onChange={(e,key,value) => props.onChange({
							id: employee.id,
							nationality: value
						})}
					/>
				</td>
				<td style={styles.formTd}>
					<GradeSelectField id="grade" name="grade"
						style={styles.formInput}
						value={employee.grade}
						errorText={errorMsg.grade}
						onChange={(e,key,value) => props.onChange({
							id: employee.id,
							grade: value
						})}
					/>
				</td>
			</tr>
			<tr style={styles.formTr}>
				<td style={styles.formTd}>
					<MaritalStatusSelectField id="maritalStatus"
						style={styles.formInput}
						name="maritalStatus"
						value={employee.maritalStatus}
						errorText={errorMsg.maritalStatus}
						onChange={(e,key,value) => props.onChange({
							id: employee.id,
							maritalStatus: value
						})}
					/>
				</td>
				<td style={styles.formTd}>
					<DivisionSelectField id="division" name="division"
						style={styles.formInput}
						value={employee.division}
						errorText={errorMsg.division}
						onChange={(e,key,value) => props.onChange({
							id: employee.id,
							division: value
						})}
					/>
				</td>
			</tr>
			<tr style={styles.formTr}>
				<td style={styles.formTd}>
					<TextField id="phone" name="phone"
						style={styles.formInput}
						hintStyle={styles.formInput}
						inputStyle={styles.formInput}
						value={employee.phone || ''}
						errorText={errorMsg.phone}
						onChange={(e,value) => props.onChange({
							id: employee.id,
							phone: value
						})}
					/>
				</td>
				<td style={styles.formTd}>
					<TextField id="email" name="email"
						style={styles.formInput}
						hintStyle={styles.formInput}
						inputStyle={styles.formInput}
						value={employee.email || ''}
						errorText={errorMsg.email}
						onChange={(e,value) => props.onChange({
							id: employee.id,
							email: value
						})}
					/>
				</td>
			</tr>
		</tbody></table></form>
	);
};

EmployeeForm.propTypes = {
	onChange: PropTypes.func.isRequired,
	styles: PropTypes.object,
	emp: PropTypes.object.isRequired,
	errors: PropTypes.object
}

export default muiThemeable()(EmployeeForm);