import uuid from 'uuid';

const emptyData = {
	relation: 0,
	name: '',
	birthDate: new Date('1927-09-09'),
	activeInd: false,
	employeeId: '',
	gender: 0
};

function Dependant(dependant) {
	const { 
		id, relation, name,
		birthDate, activeInd, employeeId,
		gender
	} = {...emptyData, ...dependant};

	this.relation = relation;
	this.name = name;
	this.birthDate = birthDate;
	this.activeInd = activeInd;
	this.employeeId = employeeId;
	this.id = id || uuid.v1();
	this.gender = gender;
}

export default Dependant;