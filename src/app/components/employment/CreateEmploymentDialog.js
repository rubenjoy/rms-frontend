import React, {Component} from 'react';

import {connect} from 'react-redux';

import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import muiThemeable from 'material-ui/styles/muiThemeable';

import {addEmployment} from '../../containers/employment/employmentsAction';
import Employment from '../../containers/employment/Employment';
import EmploymentForm from './EmploymentForm';

const defaultStyles = (muiTheme) => ({
	root: {

	},
	title: {
		backgroundColor: muiTheme.palette.primary1Color
	},
	actions: {
		backgroundColor: muiTheme.palette.primary1Color
	},
	addButton: {
		position: 'absolute',
		right: '48px',
		bottom: '80px',
		backgroundColor: muiTheme.palette.primary2Color
	},
	cancelButton: {
		color: muiTheme.palette.textColor,
		backgroundColor: muiTheme.palette.primary1Color
	},
	okButton: {
		color: muiTheme.palette.textColor,
		backgroundColor: muiTheme.palette.primary2Color
	}
});

const mapStateToProps = (state) => {
	return {
		employee: state.currentEmp
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		submitClick: (employment) => {
			dispatch(addEmployment(
				employment
			))
		}
	}
}

class CreateEmploymentDialog extends Component {
	state = {
		open: false,
		employment: new Employment({
			startDate: new Date(),
			endDate: new Date(),
			employeeId: this.props.employee.id
		}),
		errors: undefined
	}
	handleOpen = () => {
		this.setState({
			open: true
		})
	}
	handleClose = () => {
		this.setState({
			open: false
		})
	}
	handleChange = (employment) => {
		this.setState({
			employment: {
				...this.state.employment,
				...employment
			}
		})
	}
	onSubmit = () => {
		// TODO validation
		// TODO empty errors
		this.props.submitClick(this.state.employment);
		this.setState({
			employment: new Employment({
				startDate: new Date(),
				endDate: new Date(),
				employeeId: this.props.employee.id
			}),
			errors: undefined
		})
		this.handleClose();
	}
	render() {
		const muiTheme = this.props.muiTheme;
		const styles = this.props.styles || defaultStyles(muiTheme);
		const actions = [
			<FlatButton label="Cancel" primary={true}
				onTouchTap={this.handleClose}
				style={styles.cancelButton}
			/>,
			<FlatButton label="Save" primary={true}
				onTouchTap={this.onSubmit}
				style={styles.okButton}
			/>
		];
		const AddFloatingButton = () => (
			<FloatingActionButton style={styles.addButton}
				backgroundColor={styles.addButton.backgroundColor}
				onTouchTap={this.handleOpen}
			>
				<ContentAdd />
			</FloatingActionButton>
		);

		return <div style={styles.root}>
			<AddFloatingButton />
			<Dialog title="Create Employment"
				actions={actions} modal={false}
				open={this.state.open}
				onRequestClose={this.handleClose}
				autoScrollBodyContent={true}
				actionsContainerStyle={styles.actions}
				titleStyle={styles.title}
			>
				<EmploymentForm employment={this.state.employment}
					onChange={this.handleChange}
					errors={this.state.errors}
				/>
			</Dialog>
		</div>
	}
}

export default muiThemeable()(
	connect(mapStateToProps,mapDispatchToProps)(
		CreateEmploymentDialog
));