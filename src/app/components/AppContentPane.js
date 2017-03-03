import React from 'react';

import muiThemeable from 'material-ui/styles/muiThemeable';

import ListPane from './emp-list/ListPane';
import TabPane from './emp-detail/TabPane';

const styles = (muiTheme) => ({
	root: {
		height: '580px',
		width: '100%',
		display: 'flex',
		flexDirection: 'row'
	},
	list: {
		height: '100%',
		width: '280px',
		flex: '0 1 auto',
		borderWidth: '1px',
		borderStyle: 'solid',
		borderColor: muiTheme.palette.primary1Color
	},
	tab: {
		height: '100%',
		width: '700px',
		flex: '1 1 auto',
		borderWidth: '1px',
		borderStyle: 'solid',
		borderColor: muiTheme.palette.primary1Color
	},
})

const AppContentPane = (props) => (
	<div style={styles(props.muiTheme).root}
		className="app-content-pane">
		<ListPane className="emp-list-pane" 
			style={styles(props.muiTheme).list}/>
		<TabPane className="emp-detail"
			style={styles(props.muiTheme).tab}/>
	</div>
);

	
export default muiThemeable()(AppContentPane);