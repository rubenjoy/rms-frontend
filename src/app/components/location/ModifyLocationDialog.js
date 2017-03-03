import React, {Component, PropTypes} from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import ImageEdit from 'material-ui/svg-icons/image/edit';
import muiThemeable from 'material-ui/styles/muiThemeable';

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
})

class ModifyLocationDialog extends Component {
	state = {
		open: false
	}
	static propTypes = {
		location: PropTypes.object.isRequired,
		onChange: PropTypes.func
	}
	handleClose = () => {
		this.setState({
			open: false
		})
	}
	handleOpen = () => {
		this.setState({
			open: true
		})
	}
	onSubmit = () => {
		this.handleClose();
	}
	render() {
		const muiTheme = this.props.muiTheme;
		const styles = this.props.style || defaultStyles(muiTheme);
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
		const EditButton = () => (
			<IconButton onTouchTap={this.handleOpen}>
				<ImageEdit />
			</IconButton>
		);

		return <div>
			<EditButton />
			<Dialog title="Modify Office Location"
				actions={actions} modal={false}
				open={this.state.open}
				onRequestClose={this.handleClose}
				autoScrollBodyContent={true}
				actionsContainerStyle={styles.actions}
				titleStyle={styles.title}
			>
				<LocationForm location={this.props.location}
					onChange={this.props.onChange}
				/>
			</Dialog>
		</div>;
	}
}

export default muiThemeable()(ModifyLocationDialog);