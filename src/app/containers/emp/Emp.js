import {validate} from 'validate.js';

import Employee from '../employee/Employee';
import {
	divisionArray,
	jobFamilyArray,
	jobTitleArray,
	lookupDivision,
	lookupGender,
	lookupGrade,
	lookupMaritalStatus,
	lookupNationality
} from '../../utils/optionsConfig';

const emptyEmp = {
	firstName: '',
	lastName: '',
	gender: 0,
	birthDate: new Date('1927-09-09'),
	nationality: 0,
	maritalStatus: 0,
	phone: '',
	subDivision: '',
	status: '',
	suspendDate: new Date('1927-09-09'),
	hireDate: new Date('1927-09-09'),
	grade: 0,
	division: 0,
	email: '',
	id: ''
};

/**
 *  Emp object for create employee form.
 **/
function Emp(emp) {
	const {firstName, lastName, gender, birthDate, 
		nationality, maritalStatus, phone, 
		subDivision, status, suspendDate,
		hireDate, grade, division, email,
		id}
		= {...emptyEmp, ...emp};
	this.firstName = firstName.trim();
	this.lastName = lastName.trim();
	this.gender = gender;
	this.hireDate = hireDate;
	this.birthDate = birthDate;
	this.nationality = nationality;
	this.maritalStatus = maritalStatus;
	this.subDivision = subDivision;
	this.status = status;
	this.suspendDate = suspendDate;
	this.grade = grade;
	this.division = division;
	this.email = email;
	this.phone = phone;
	this.id = id;
}

/**
 *  build Employee from Emp
 **/
const buildEmployee = (emp) => {
	const {firstName, lastName, gender, 
		hireDate, birthDate, nationality,
		maritalStatus, division, 
		status, suspendDate, email,
		phone, grade, id} = {id: 'undefined', ...emp};

	const employee = new Employee({
		name: firstName.trim() + ' ' + lastName.trim(),
		hireDate,
		birthDate,
		suspendDate,
		nationality,
		gender,
		maritalStatus,
		division: divisionArray[division],
		employmentStatus: status,
		email, 
		phone,
		jobFamily: jobFamilyArray[grade],
		jobTitle: jobTitleArray[grade],
		id
	});

	return employee;
}

/**
 *  rebuild Emp from employee
 **/
const rebuildEmp = (employee) => {
	const {name, gender, hireDate, birthDate,
		suspendDate, nationality, maritalStatus,
		division, employmentStatus, email, phone, 
		jobFamily, jobTitle, id
	} = employee;

	const idx = name.indexOf(' ');
	const firstName = name.slice(0, idx) || '';
	const lastName = name.slice(idx+1) || '';
	const emp = new Emp({
		firstName,
		lastName,
		hireDate,
		suspendDate,
		birthDate,
		nationality: lookupNationality(nationality),
		gender: lookupGender(gender),
		maritalStatus: lookupMaritalStatus(maritalStatus),
		division: lookupDivision(division), 
		status: employmentStatus,
		email,
		phone,
		grade: lookupGrade(jobFamily,jobTitle),
		id
	})
	return emp;
};

export {rebuildEmp};

const empConstraints = {
	firstName: {
		presence: true,
		format: {
			pattern: /^[A-Za-z]+$/,
			message: '\'%{value}\' contains non letters character.'
		}
	},
	lastName: {
		format: {
			pattern: /^[A-Za-z ]+$/,
			message: '\'%{value}\' contains non letters character.'
		}
	},
	phone: {
		presence: true,
		format: {
			pattern: /^\+(61|62|65|84|86)[0-9]+$/,
			message: '\'%{value}\' doesn\'t look like valid phone.'
		}
	},
	email: {
		presence: true,
		email: {
			nessage: '\'%{value}\' doesn\'t look like valid email.'
		}
	}
};

/**
 *   Return validate.js error object if found error on Emp, 
 *   otherwise return undefined
 **/
function isValid(emp) {
	return validate(emp,empConstraints);
}

export {isValid};

/**
 *  emp reducer
 **/
const emp = (state,action) => {
	switch (action.type) {
		case 'ADD_EMP':
			return new Emp(action);
		case 'BUILD_EMPLOYEE':
			return buildEmployee(new Emp(action));
		default:
			return state;
	}
}

export {buildEmployee, emp};

export default Emp;