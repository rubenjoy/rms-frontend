import React from 'react';

import buildSelectField from './buildSelectField';
import {nationalityOptions} from '../../utils/optionsConfig';

const NationalitySelectField = (props) => {
	const SelectField = buildSelectField(
		nationalityOptions,
		{
			...props,
			floatingLabelText: 'Nationality'
		}
	);
	return (<SelectField />);
}

export default NationalitySelectField;