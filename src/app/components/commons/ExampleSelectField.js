import React from 'react';

import buildSelectField from './buildSelectField';

const valueOptions = [
	{id: 0, text: 'value 0'},
	{id: 1, text: 'value 1'},
	{id: 2, text: 'value 2'}
];

const ExampleSelectField = 
({id, floatingLabelText, name, value, onChange}) => {
	const WrappedSelectField = buildSelectField(valueOptions,
		{
			id, floatingLabelText, value, name, onChange	
		})
	return (
		<WrappedSelectField />
	);
}

export default ExampleSelectField;