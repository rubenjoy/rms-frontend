import uuid from 'uuid';

const emptyData = {
	name:'',
	activeInd: false,
	phone: '',
	jobFamily: '',
	jobTitle: '',
	stream: '',
	businessUnit: '',
	hireDate: new Date('1927-09-09'),
	location: '',
	birthDate: new Date('1927-09-09'),
	email: '',
	employmentStatus: '',
	nationality: 0,
	gender: 0,
	maritalStatus: 0,
	division: 0,
	suspendDate: new Date('1927-09-09')
};
/**
 *  Employee object adhere to database 
 *  ERD documentation
 **/
function Employee(emp) {
	const {id, name, activeInd, phone, 
		jobFamily, jobTitle, stream,
		businessUnit, hireDate, location,
		birthDate, email, employmentStatus,
		nationality, gender, maritalStatus,
		division, suspendDate}
		= {...emptyData, ...emp};
	this.name = name;
	this.activeInd = activeInd;
	this.phone = phone;
	this.jobFamily = jobFamily;
	this.jobTitle = jobTitle;
	this.stream =  stream;
	this.businessUnit = businessUnit;
	this.hireDate = hireDate;
	this.location = location;
	this.id = id || uuid.v1();
	this.birthDate = birthDate;
	this.email = email;
	this.employmentStatus = employmentStatus;
	this.nationality = nationality;
	this.gender = gender;
	this.maritalStatus = maritalStatus;
	this.division = division;
	this.suspendDate = suspendDate;
}

export default Employee;