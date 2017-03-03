import React from 'react';

import buildSelectField from './buildSelectField';
import {gradeOptions} from '../../utils/optionsConfig';

const GradeSelectField = (props) => {
	const SelectField = buildSelectField(
		gradeOptions,
		{
			...props,
			floatingLabelText: 'Grade'
		}
	);

	return (<SelectField />);
}

export default GradeSelectField;