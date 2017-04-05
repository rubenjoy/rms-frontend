const createLookup = (options) => (text) => {
	const item =
		options.find(item => item.text === text);
	return (item === undefined ? 0 : item.id);
}

const createArray = (options) => {
	return options.map(item => item.text);
}

export const genderOptions = [
	{id: 0, text: 'Male'},
	{id: 1, text: 'Female'}
];

export const lookupGender = createLookup(genderOptions);
const genderArray = createArray(genderOptions);

export const maritalStatusOptions = [
	{id: 0, text: 'Single'},
	{id: 1, text: 'Married'}
];

export const lookupMaritalStatus = createLookup(maritalStatusOptions);

export const nationalityOptions = [
	{id: 0, text: 'Indonesian'},
	{id: 1, text: 'Australian'},
	{id: 2, text: 'Singaporean'},
	{id: 3, text: 'Vietnamese'}
];

export const lookupNationality = createLookup(nationalityOptions);

export const gradeOptions = [
	{id: 0, text: 'SE-JP'},
	{id: 1, text: 'SE-PG'},
	{id: 2, text: 'SE-AP'},
	{id: 3, text: 'SE-AN'},
];

export const gradeArray = createArray(gradeOptions);
export const jobFamilyArray = gradeOptions.map(item => (item.text.split('-',2)[0]));
export const jobTitleArray = gradeOptions.map(item => (item.text.split('-',2)[1]));
export const lookupGrade = (jobFamily, jobTitle) => {
	const item  = 
		gradeOptions.find(
			item => (item.text === jobFamily+'-'+jobTitle)
		);
	return (item === undefined ? 0 : item.id);
};

export const divisionOptions = [
	{id: 0, text: 'CDC Java'},
	{id: 1, text: 'CDC AsteRx'},
	{id: 2, text: 'CDC Ruby'},
	{id: 3, text: 'CDC Java Web'}
];

export const divisionArray = createArray(divisionOptions);

export const lookupDivision = createLookup(divisionOptions);

export const devStageOptions = [
	{id: 0, text: 'DS1'},
	{id: 1, text: 'DS2'},
	{id: 2, text: 'DS3'},
	{id: 3, text: 'DS4'},
	{id: 4, text: 'DS5'},
	{id: 5, text: 'DS6'},
	{id: 6, text: 'DS7'},
	{id: 7, text: 'DS8'},
	{id: 8, text: 'DS9'},
	{id: 9, text: 'DS10'},
	{id: 10, text: 'DS11'},
	{id: 11, text: 'DS12'},
];

export const depTypeOptions = [
	{id: 0, text: 'Husband'},
	{id: 1, text: 'Wife'},
	{id: 2, text: 'Daugther'},
	{id: 3, text: 'Son'}
];

export const depTypeMapToGender = {
	'HUSBAND': genderArray[0],
	'WIFE': genderArray[1],
	'DAUGHTER': genderArray[1],
	'SON': genderArray[0]
}

export const locationOptions = [
	{id: 0, text: 'Bali Office'},
	{id: 1, text: 'Yogyakarta Office'},
	{id: 2, text: 'Jakarta Office'},
	{id: 3, text: 'Bandung Office'},
	{id: 4, text: 'Australian Representative Office'},
	{id: 5, text: 'Singapore Representative Office'},
	{id: 6, text: 'Vietname Office'}
];

export const locationArray = createArray(locationOptions);