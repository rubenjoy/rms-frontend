import React, {Component, PropTypes} from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import ImageEdit from 'material-ui/svg-icons/image/edit';
import muiThemeable from 'material-ui/styles/muiThemeable';

import EmploymentForm from './EmploymentForm';

const defaultStyles = (muiTheme) => ({
	root: {

	},
	actions: {
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
	editButton: {

	},
	title: {
		backgroundColor: muiTheme.palette.primary1Color
	}
})

class ModifyEmploymentDialog extends Component {
	state = {
		open: false
	}
	static propTypes = {
		employment: PropTypes.object.isRequired,
		onChange: PropTypes.func.isRequired
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
	onSubmit = () => {
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
		const EditIconButton = () => (
			<IconButton style={styles.editButton}
				tooltip="modify"
				onTouchTap={this.handleOpen}
			>
				<ImageEdit />
			</IconButton>
		)

		return <div style={styles.root}>
			<EditIconButton />
			<Dialog title="Modify Employment"
				actions={actions} modal={false}
				open={this.state.open}
				onRequestClose={this.handleClose}
				autoScrollBodyContent={true}
				actionsContainerStyle={styles.actions}
				titleStyle={styles.title}
			>
				<EmploymentForm employment={this.props.employment}
					onChange={this.props.onChange}
				/>
			</Dialog>
		</div>
	}
}

export default muiThemeable()(ModifyEmploymentDialog);