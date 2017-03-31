import React, {PropTypes} from 'react';

import Avatar from 'material-ui/Avatar';
import {ListItem} from 'material-ui/List';
import muiThemeable from 'material-ui/styles/muiThemeable';

const avatarImg = 'dummy-assets/avatar-unknown.png';

const styles = (muiTheme) => ({
	root: {

	},
	selected: {
		backgroundColor: muiTheme.palette.primary3Color
	},
	avatar: {
		size: 58, 
	},
	avatarDiv: {
		left: '8px',
		paddingRight: '6px'
	},
	primaryText: {
		fontSize: '14px',
		overflow: 'ellipsis',
		fontWeight: 'bold'
	},
	secondaryText: {
		fontSize: '10px',
		overflow: 'ellipsis'
	}
});

const PrimaryText = (props) => (
<div style={styles(props.muiTheme).primaryText}>
	{props.name}
</div>
);

const SecondaryText = (props) => {
	return (
		<div style={styles(props.muiTheme).secondaryText}>
			<div>{props.jobFamily.toUpperCase() + '-' + props.jobTitle.toUpperCase() + ', ' 
			+ props.division}</div>
			<div>{props.location + ', ' + props.phone}</div>	
		</div>
	);
}

// TODO add radio button plus hire date
const EmployeeItem = ({muiTheme, employee, selected, onClick}) => (
	<ListItem style={selected ? styles(muiTheme).selected : styles(muiTheme).root} 
		leftAvatar={<div style={styles(muiTheme).avatarDiv}>
			<Avatar src={avatarImg} 
			{...(styles(muiTheme).avatar)}
			/>
			</div>}

		primaryText={<PrimaryText muiTheme={muiTheme} name={employee.name}/>}
		secondaryText={<SecondaryText muiTheme={muiTheme} 
			jobFamily={employee.jobFamily} jobTitle={employee.jobTitle} 
			stream={employee.stream} businessUnit={employee.businessUnit} 
			division={employee.division}
			location={employee.location} phone={employee.phone}/>}
		secondaryTextLines={2}
		onTouchTap={() => {onClick(employee)}}
	/>
);
EmployeeItem.propTypes = {
	employee: PropTypes.object.isRequired,
	onClick: PropTypes.func
};

export default muiThemeable()(EmployeeItem);