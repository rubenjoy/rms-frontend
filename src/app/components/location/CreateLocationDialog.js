import React, {Component} from 'react';

import {connect} from 'react-redux';

import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import muiThemeable from 'material-ui/styles/muiThemeable';

import {addLocation} from '../../containers/location/locationsAction';
import Location from '../../containers/location/Location';
import LocationForm from './LocationForm';

const defaultStyles = (muiTheme) => ({
	root: {},
	actions: {
		backgroundColor: muiTheme.palette.primary1Color
	},
	title: {
		backgroundColor: muiTheme.palette.primary1Color
	},
	cancelButton: {
		color: muiTheme.palette.textColor,
		backgroundColor: muiTheme.palette.primary1Color
	},
	okButton: {
		color: muiTheme.palette.textColor,
		backgroundColor: muiTheme.palette.primary2Color
	},
	addButton: {
		position: 'absolute',
		right: '48px',
		bottom: '80px',
		backgroundColor: muiTheme.palette.primary2Color
	},
})

const mapStateToProps = (state) => ({
	employee: state.currentEmp
})
const mapDispatchToProps = (dispatch) => ({
	submitClick: (location) => {
		dispatch(addLocation(location))
	}
})
class CreateLocationDialog extends Component {
	state = {
		open: false,
		location: new Location({
			startDate: new Date(),
			endDate: new Date(),
			branchOffice: 0
		})
	}
	handleOpen = () => {
		this.setState({
			open: true
		});
	}
	handleClose = () => {
		this.setState({
			open: false
		})
	}
	handleChange = (location) => {
		this.setState({
			location: {
				...this.state.location,
				...location
			}
		})
	}
	onSubmit = () => {
		// TODO validation
		this.props.submitClick(this.state.location);
		this.setState({
			location: new Location({
				startDate: new Date(),
				endDate: new Date(),
				branchOffice: 0
			})
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
			>
			</FlatButton>,
			<FlatButton label="Save" primary={true}
				onTouchTap={this.onSubmit}
				style={styles.okButton}
			>
			</FlatButton>
		];
		const AddActionButton = () => (
			<FloatingActionButton style={styles.addButton}
				backgroundColor={styles.addButton.backgroundColor}
				onTouchTap={this.handleOpen}
			>
				<ContentAdd />
			</FloatingActionButton>
		);

		return <div>
			<AddActionButton />
			<Dialog title="Create Office Location"
				actions={actions} modal={false}
				open={this.state.open}
				onRequestClose={this.handleClose}
				autoScrollBodyContent={true}
				actionsContainerStyle={styles.actions}
				titleStyle={styles.title}
			>
				<LocationForm location={this.state.location}
					onChange={this.handleChange}
				/>
			</Dialog>
		</div>;
	}
}

export default muiThemeable()(
	connect(mapStateToProps,mapDispatchToProps)(CreateLocationDialog)
);