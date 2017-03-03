import uuid from 'uuid';

const emptyData = {
	address: '',
	activeInd: false,
	employeeId: ''
};

function Address(addressData) {
	const {address, activeInd,
		employeeId, id
	} = {...emptyData, ...addressData};

	this.address = address;
	this.activeInd = activeInd;
	this.employeeId = employeeId;
	this.id = id || uuid.v1();
}

export default Address;