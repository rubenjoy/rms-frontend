import React from 'react';

import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';

import DivisionSelectField from '../commons/DivisionSelectField';
import '../../containers/employee/Employee';
import GenderSelectField from '../commons/GenderSelectField';
import GradeSelectField from '../commons/GradeSelectField';
import MaritalStatusSelectField from '../commons/MaritalStatusSelectField';
import NationalitySelectField from '../commons/NationalitySelectField';
// TODO ganti pake EmployeeForm ga dobel jadinya.. 

const styles = {
	root: {
		margin: '0 auto'
	},
	formTr: {

	},
	formTd: {
		width: '300px'
	},
	formInput: {
		width: '300px'
	},
	formAvatar:  {
		width: '120px'
	}
};

const createTextField = (id, text, handleChange, value, error) => (
	<TextField id={id} name={id}
		hintText={text} 
		floatingLabelText={text}
		style={styles.formInput}
		hintStyle={styles.formInput}
		inputStyle={styles.formInput}
		onChange={handleChange}
		value={value || ''}
		errorText={error !== undefined ? error.join(' ') : ''}
	/>
);

const createDateField = (id, text,  handleChange, value) => (
	<DatePicker id={id} name={id}
		hintText={text} 
		floatingLabelText={text}
		style={styles.formInput}
		hintStyle={styles.formInput}
		inputStyle={styles.formInput}
		value={value}
		onChange={handleChange}
	>
	</DatePicker>
);

// TODO add avatar icon
const CreateEmployeeForm = ({onChange,employee,callbacks, errors}) => (
	<form style={styles.root}><table><tbody>
		<tr style={styles.formTr}>
			<td style={styles.formTd}>
				{createTextField('firstName', 'First Name',
					onChange, employee.firstName, 
					(errors === undefined ? [] : errors.firstName))}
			</td>
			<td style={styles.formTd}>
				{createTextField('subDivision', 'Sub Division',
					onChange, employee.subDivision,
					(errors === undefined ? [] : errors.subDivision))}
			</td>
		</tr>
		<tr style={styles.formTr}>
			<td style={styles.formTd}>
				{createTextField('lastName', 'Last Name',
					onChange, employee.lastName,
					(errors === undefined ? [] : errors.lastName))}
			</td>
			<td style={styles.formTd}>
				{createTextField('status', 'Status',
					onChange, employee.status,
					(errors === undefined ? [] : errors.status))}
			</td>
		</tr>
		<tr style={styles.formTr}>
			<td style={styles.formTd}>
				<GenderSelectField id="gender" name="gender"
					onChange={callbacks.onGenderChange}
					value={employee.gender}/>
			</td>
			<td style={styles.formTd}>
				{createDateField('suspendDate', 'Suspend Date',
					callbacks.onSuspendChange, employee.suspendDate)}
			</td>
		</tr>
		<tr style={styles.formTr}>
			<td style={styles.formTd}>
				{createDateField('birthDate', 'Birth of Date',
					callbacks.onBirthDateChange, employee.birthDate)}
			</td>
			<td style={styles.formTd}>
				{createDateField('hireDate','Hire Date',
					callbacks.onHireDateChange, employee.hireDate)}
			</td>
		</tr>
		<tr style={styles.formTr}>
			<td style={styles.formTd}>
				<NationalitySelectField id="nationality"
					name="nationality"
					onChange={callbacks.onNationalityChange}
					value={employee.nationality}
				/>
			</td>
			<td style={styles.formTd}>
				<GradeSelectField id="grade" name="grade"
					onChange={callbacks.onGradeChange}
					value={employee.grade}
				/>
			</td>
		</tr>
		<tr style={styles.formTr}>
			<td style={styles.formTd}>
				<MaritalStatusSelectField id="maritalStatus"
					name="maritalStatus"
					onChange={callbacks.onMaritalStatusChange}
					value={employee.maritalStatus}
				/>
			</td>
			<td style={styles.formTd}>
				<DivisionSelectField id="division" name="division"
					onChange={callbacks.onDivisionChange}
					value={employee.division}
				/>
			</td>
		</tr>
		<tr style={styles.formTr}>
			<td style={styles.formTd}>
				{createTextField('phone', 'Phone',
					onChange, employee.phone, 
					(errors === undefined ? [] : errors.phone))}
			</td>
			<td style={styles.formTd}>
				{createTextField('email', 'Email',
					onChange, employee.email,
					(errors === undefined ? [] : errors.email))}
			</td>
		</tr>
	</tbody></table></form>
);

export default CreateEmployeeForm;