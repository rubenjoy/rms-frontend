import uuid from 'uuid';

const emptyData = {
	startDate: new Date('1927-09-09'),
	endDate: new Date('1927-09-09'),
	grade: 0,
	devStage: 0,
	employeeId: ''
}

function Grade(oGrade) {
	const {startDate, endDate,
		grade, devStage, 
		employeeId, id} = 
		{...emptyData, ...oGrade};

	this.startDate = startDate;
	this.endDate = endDate;
	this.grade = grade;
	this.devStage = devStage;
	this.employeeId = employeeId;
	this.id = id || uuid.v1();
}

export default Grade;