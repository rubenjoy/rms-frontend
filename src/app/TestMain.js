import React from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';

import rmsMuiTheme from './styles/rmsMuiTheme';

import ExampleSelectField from './components/commons/ExampleSelectField';

const TestMain = () => (
	<MuiThemeProvider muiTheme={rmsMuiTheme} >
	<div>
		<ExampleSelectField id="example" name="example" 
			floatingLabelText="sample only"
			value={1} />
		<TextField id="extext" name="extext"
			floatingLabelText="sample text field"
			hintText="type here" />
	</div>
	</MuiThemeProvider>
);

export default TestMain;
