import React from 'react';
import {connect} from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import rmsMuiTheme from './styles/rmsMuiTheme';

import AppHeader from './components/AppHeader';
import AppContentPane from './components/AppContentPane';
import CreateEmployeeDialog from './components/employee/CreateEmployeeDialog';
import logo from './styles/logo.svg';
import './styles/Main.css';

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

const mapStateToProps = (state) => ({
	fetchStatus: state.fetchStatus
});

const Spinner = () => (
	<div className="Main Main-header">
		<img src={logo} className="Main-logo" alt="logo" />
		<h2>Let the RMS App fetch the magic.....</h2>
	</div>
);

const Error = (props) => (
	<div className="Main-error">
		<h2>Err HTTP Code: {props.httpCode}</h2>
		Sorry, RMS don't keep its promise,,
		<p>
			message from REST: {props.message}
		</p>
	</div>
)

const Main = ({fetchStatus}) => {
	if (fetchStatus.isFetching) {
		return <Spinner />
	}
	if (fetchStatus.isFetching === false &&
		fetchStatus.errorMessage !== '') {
		const {errorHttpCode, errorMessage} = fetchStatus;
		return <Error httpCode={errorHttpCode}
					message={errorMessage}
				/>
	}
	return (
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
	);
}

export default connect(mapStateToProps,undefined)(Main);