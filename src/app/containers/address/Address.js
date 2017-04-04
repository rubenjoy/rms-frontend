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
	this.id = id || '0';
}

export default Address;