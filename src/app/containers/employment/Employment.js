import uuid from 'uuid';

// CHANGE:
// 1. jobDesc to array of string
// 2. jobTitle as String

const emptyData = {
	startDate: new Date('1927-09-09'),
	endDate: new Date('1927-09-09'),
	employer: '',
	jobDesc: [],
	activeInd: false,
	employeeId: '',
	jobTitle: ''
};

function Employment(employment) {
	const {id, startDate, endDate,
		employer, jobDesc, activeInd,
		employeeId, jobTitle} = 
		{...emptyData, ...employment};


	this.id = id || uuid.v1();
	this.startDate = startDate;
	this.endDate = endDate;
	this.employer = employer;
	this.jobDesc = jobDesc;
	this.activeInd = activeInd;
	this.employeeId = employeeId;
	this.jobTitle = jobTitle;
}

export default Employment;