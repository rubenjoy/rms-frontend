import React, {Component} from 'react';

import {connect} from 'react-redux';

import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import muiThemeable from 'material-ui/styles/muiThemeable';

import {addEmployee} from '../../containers/employee/employeesAction';
import CreateEmployeeForm from './CreateEmployeeForm';
import Emp, {buildEmployee,
		isValid} from '../../containers/emp/Emp';

const styles = (muiTheme) => ({
	root: {

	},
	title: {
		backgroundColor: muiTheme.palette.primary1Color
	},
	actions: {
		backgroundColor: muiTheme.palette.primary1Color
	},
	addButton: {
		position: 'relative',
		left: '220px',
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
})

const mapStateToProps = (/*state*/) => {
	return {};
}
const mapDispatchToProps = (dispatch) => {
	return {
		onAddClick: (emp) => {
			dispatch(addEmployee(buildEmployee(emp)));
		}
	}
}

class CreateEmployeeDialog extends Component {
	state = {
		open: false,
		emp: new Emp({
			hireDate: new Date('2017-02-21'), 
			suspendDate: new Date('2017-02-21'),
			birthDate: new Date('2017-02-21'),
			phone: undefined
		}),
		errorMsg: undefined
	}
	handleOpen = () => {
		this.setState({open: true});
	}
	handleClose = () => {
		this.setState({open: false});
	}
	handleChange = (event/*, value*/) => {
		const target = event.target;
		this.setState({
			emp: {
				...this.state.emp,
				[target.name]: target.value
			}
		});
	}
	handleDateChange = (id) => (
		(e,date) => {
			const d = date !== undefined ? date : new Date();
			this.setState({
				emp: {
					...this.state.emp,
					[id]: d
				}
			})
		}
	)
	handleSelectChange = (id) => (
		(e, key, value) => {
			this.setState({
				emp: {
					...this.state.emp,
					[id]: value
				}
			})
		}
	)
	callbacks = {
		onSuspendChange: this.handleDateChange('suspendDate'),
		onGenderChange: this.handleSelectChange('gender'),
		onNationalityChange: this.handleSelectChange('nationality'),
		onMaritalStatusChange: this.handleSelectChange('maritalStatus'),
		onBirthDateChange: this.handleDateChange('birthDate'),
		onHireDateChange: this.handleDateChange('hireDate'),
		onGradeChange: this.handleSelectChange('grade'),
		onDivisionChange: this.handleSelectChange('division')
	}
	onSubmit = () => {
		const errorMsg = isValid(this.state.emp);
		if(errorMsg === undefined) {
			this.handleClose();
			this.props.onAddClick(this.state.emp);
			this.setState({
				emp: new Emp({
					hireDate: new Date(),
					suspendDate: new Date(),
					birthDate: new Date(),
					phone: undefined
				}),
				errorMsg: undefined
			});
		} else {
			this.setState({
				errorMsg
			})
		}
	}
	render() {
		const actions = [
		<FlatButton label="Cancel" primary={true}
			onTouchTap={this.handleClose}
			style={styles(this.props.muiTheme).cancelButton}
		/>,
		<FlatButton label="Save" primary={true}
			keyboardFocused={true} onTouchTap={this.onSubmit}
			style={styles(this.props.muiTheme).okButton}
		/>
		];
		const AddFloatingButton = () => (
			<FloatingActionButton style={styles(this.props.muiTheme).addButton}
					backgroundColor={styles(this.props.muiTheme).addButton.backgroundColor}
					onTouchTap={this.handleOpen}
			>
				<ContentAdd />
			</FloatingActionButton>
		);

		return <div style={styles(this.props.muiTheme).root}>
			<AddFloatingButton />
			<Dialog title="Create Employee"
				actions={actions} modal={false}
				open={this.state.open}
				onRequestClose={this.handleClose}
				autoScrollBodyContent={true}
				actionsContainerStyle={styles(this.props.muiTheme).actions}
				titleStyle={styles(this.props.muiTheme).title}
			>
				<CreateEmployeeForm employee={this.state.emp}
					callbacks={this.callbacks}
					onChange={this.handleChange}
					errors={this.state.errorMsg}
				/>
			</Dialog>
		</div>;
	}
}

export default muiThemeable()(connect(mapStateToProps,mapDispatchToProps)(CreateEmployeeDialog));