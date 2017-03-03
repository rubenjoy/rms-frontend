import React from 'react';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import muiThemeable from 'material-ui/styles/muiThemeable'

import ActionSettings from 'material-ui/svg-icons/action/settings';
import ActionPower from 'material-ui/svg-icons/action/power-settings-new';

import UserProfile from './UserProfile'

const styles = (muiTheme) => ({
	root: {
		backgroundColor: muiTheme.palette.primary2Color,
	},
	title: {
		lineHeight: 'normal',
	}
})

const AppHeader = (props) => (
			<AppBar title={<UserProfile className="appbar-title"/>}
				className='app-header'
				style={styles(props.muiTheme).root}
				titleStyle={styles(props.muiTheme).title}
			iconElementRight={
				<div>
					<IconButton><ActionSettings  /></IconButton>
					<IconButton><ActionPower /></IconButton>
				</div>}
			/>
		);
	
export default muiThemeable()(AppHeader);