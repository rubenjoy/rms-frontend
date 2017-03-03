import React from 'react';
import {PropTypes} from 'react';

import FlatButton from 'material-ui/FlatButton';
import muiThemeable from 'material-ui/styles/muiThemeable';

const styles = (muiTheme, style) => ({
	root: {
		height: '530px',
		width: '698px',
		display: 'flex',
		flexDirection: 'column',
		margin: '0 auto',
		padding: '2px 1px 2px 1px',
		...style
	},
	divForm: {
		flex: '1 0 92%',
		overflowY: 'auto'
	},
	divButton: {
		flex: '0 1 8%', 
		height: '18px',
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		backgroundColor: muiTheme.palette.primary1Color,
		padding: '2px 6px 2px 6px'
	},
	okButton: {
		backgroundColor: muiTheme.palette.primary2Color,
		color: muiTheme.palette.textColor
	},
	cancelButton: {
		color: muiTheme.palette.textColor
	},
	headline: {
		padding: '1px 0px 1px 0px'
	}
});

const FormWrapper = (props) => (
	<div className="wrapper"
		style={styles(props.muiTheme, props.style).root}>
		<div className="div-form"
			style={styles(props.muiTheme).divForm}>
			<h4 style={styles(props.muiTheme).headline}>
				{props.title}
			</h4>
			{props.children}
		</div>
		<div className="div-button"
			style={styles(props.muiTheme).divButton}>
				<FlatButton label="Cancel" primary={true}
					style={styles(props.muiTheme).cancelButton}
					onTouchTap={() => {
						if (props.onCancelClick !== undefined) {
							props.onCancelClick();
						}
					}}
				/>,
				<FlatButton label="Save" primary={true}
					keyboardFocused={true}
					style={styles(props.muiTheme).okButton}
					onTouchTap={() => {
						props.onSubmitClick();
					}}
				/>
		</div>
	</div>
);

FormWrapper.propTypes = {
	onSubmitClick: PropTypes.func.isRequired,
	onCancelClick: PropTypes.func
}

export default muiThemeable()(FormWrapper);