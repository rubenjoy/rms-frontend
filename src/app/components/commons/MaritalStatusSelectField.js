import React from 'react';

import buildSelectField from './buildSelectField';
import {maritalStatusOptions} from '../../utils/optionsConfig';

const MaritalStatusSelectField = (props) => {
	const SelectField = buildSelectField(
		maritalStatusOptions,
		{
			...props,
			floatingLabelText: 'Marital Status'
		}
	);
	return (<SelectField />);
}

export default MaritalStatusSelectField;