import React from 'react';

import buildSelectField from './buildSelectField';
import {divisionOptions} from '../../utils/optionsConfig';

const DivisionSelectField = (props) => {
	const SelectField = buildSelectField(
		divisionOptions,
		{
			...props,
			floatingLabelText: 'Division'
		}
	);
	return (<SelectField />);
}

export default DivisionSelectField;