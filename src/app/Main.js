import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import rmsMuiTheme from './styles/rmsMuiTheme';

import AppHeader from './components/AppHeader';
import AppContentPane from './components/AppContentPane';
import CreateEmployeeDialog from './components/employee/CreateEmployeeDialog';

const styles = (/*muiTheme*/) => ({
	root: {
		width: '980px',
		height: '660px',
		margin: '0 auto'
	},
	header: {

	},
	contentPane: {
		width: '100%',
		heigth: '580px',
	}
});

const Main = () => (
	<MuiThemeProvider muiTheme={rmsMuiTheme}>
		<div className="app-root" style={styles(rmsMuiTheme).root}>
			<div>
				<AppHeader className="app-header col span12"/>
			</div>
		<div className="content-pane" style={styles(rmsMuiTheme).contentPane}>
			<AppContentPane/>
		</div>
		<CreateEmployeeDialog />
		</div>
	</MuiThemeProvider>
)

export default Main;