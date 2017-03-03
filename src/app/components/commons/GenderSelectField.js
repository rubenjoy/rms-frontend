import React from 'react';

import buildSelectField from './buildSelectField';
import {genderOptions} from '../../utils/optionsConfig';

const GenderSelectField = (props) => {
	const SelectField = buildSelectField(genderOptions,
		{
			...props,
			floatingLabelText: 'Gender',
		});
	return (<SelectField />);
};

export default GenderSelectField; 