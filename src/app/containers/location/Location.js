import uuid from 'uuid';

const emptyData = {
	branchOffice: '',
	startDate: new Date('1927-09-09'),
	endDate: new Date('1927-09-09'),
	employeeId: '',
	activeInd: false
};

// TODO active Indicator?
function Location(location) {
	const {id, branchOffice,
		startDate, endDate,
		employeeId, activeInd
	} = {...emptyData, ...location};

	this.branchOffice = branchOffice;
	this.startDate = startDate;
	this.endDate = endDate;
	this.employeeId = employeeId;
	this.id = id || uuid.v1();
	this.activeInd = activeInd;
}

export default Location;