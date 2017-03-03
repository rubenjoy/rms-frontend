function parseDate(dateString) {
	var ts = Date.parse(dateString);

	if (isNaN(ts) === false) {
		return new Date(ts);
	}
	return new Date();
}

export {parseDate};

const dateOptions = {
	month: 'short', 
	year: 'numeric'
}
const formater = new Intl.DateTimeFormat('en-US',dateOptions);

export {formater};
