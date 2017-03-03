import React from 'react';

import muiThemeable from 'material-ui/styles/muiThemeable';

import EmployeeList from './EmployeeList';
//import SearchBar from './SearchBar';

const styles = {
	root: {
		width: '320px'
	},
};

// TODO how to delete employee
// TODO add search bar
const ListPane = (props) => (
	<div style={props.style === undefined ? styles.root : props.style}>
		<EmployeeList />
	</div>
);

export default muiThemeable()(ListPane);