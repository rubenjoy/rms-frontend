
const genderOptions = [
	{id: 0, text: 'Male'},
	{id: 1, text: 'Female'}
];

export {genderOptions};

const maritalStatusOptions = [
	{id: 0, text: 'Single'},
	{id: 1, text: 'Married'}
];

export {maritalStatusOptions};

const nationalityOptions = [
	{id: 0, text: 'Indonesian'},
	{id: 1, text: 'Australian'},
	{id: 2, text: 'Singaporean'},
	{id: 3, text: 'Vietnamese'}
];

export {nationalityOptions};

const gradeOptions = [
	{id: 0, text: 'SE-JP'},
	{id: 1, text: 'SE-PG'},
	{id: 2, text: 'SE-AP'},
	{id: 3, text: 'SE-AN'},
];

const gradeArray = gradeOptions.map(item => (item.text));
const jobFamilyArray = gradeOptions.map(item => (item.text.split('-',2)[0]));
const jobTitleArray = gradeOptions.map(item => (item.text.split('-',2)[1]));
const lookupGrade = (jobFamily, jobTitle) => {
	const item  = 
		gradeOptions.find(
			item => (item.text === jobFamily+'-'+jobTitle)
		);
	return (item === undefined ? 0 : item.id);
};

export {gradeArray, jobFamilyArray, jobTitleArray};
export {lookupGrade};

export {gradeOptions};

const divisionOptions = [
	{id: 0, text: 'CDC Java'},
	{id: 1, text: 'CDC AsteRx'},
	{id: 2, text: 'CDC Ruby'},
	{id: 3, text: 'CDC Java Web'}
];

export {divisionOptions};

const divisionArray = divisionOptions.map(item => (item.text));

export {divisionArray};

const devStageOptions = [
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

export {devStageOptions};

const depTypeOptions = [
	{id: 0, text: 'Husband'},
	{id: 1, text: 'Wife'},
	{id: 2, text: 'Daugther'},
	{id: 3, text: 'Son'}
];

export {depTypeOptions};

const locationOptions = [
	{id: 0, text: 'Bali Office'},
	{id: 1, text: 'Yogyakarta Office'},
	{id: 2, text: 'Jakarta Office'},
	{id: 3, text: 'Bandung Office'},
	{id: 4, text: 'Australian Representative Office'},
	{id: 5, text: 'Singapore Representative Office'},
	{id: 6, text: 'Vietname Office'}
];

export {locationOptions};

const locationArray = locationOptions.map(item => (item.text));

export {locationArray};