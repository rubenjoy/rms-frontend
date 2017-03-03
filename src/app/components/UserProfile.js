import React from 'react';

import { Card, CardHeader } from 'material-ui/Card';
import muiThemeable from 'material-ui/styles/muiThemeable';

// TODO the values are taken from logged user
// TODO name capitalized first letter
const name = "Michael Jacob Hutapea";
const jobFamily = "se";
const jobStage = "ap";

const avatarImagePath = "dummy-assets/avatar-unknown.png";

const styles = (muiTheme) => ({
	root: {
		backgroundColor: muiTheme.palette.primary2Color,
	},
	header: {
		padding: '8px'
	},
	title: {
		fontSize: '24px',
	},
	subtitle: {
		fontSize: '16px'
	}
});

const UserProfile = (props) => (
		<Card style={styles(props.muiTheme).root}>
			<CardHeader
				title={name}
				subtitle={jobFamily.toUpperCase()
					+"-"+jobStage.toUpperCase()}
				avatar={avatarImagePath}
				style={styles(props.muiTheme).header}
				titleStyle={styles(props.muiTheme).title}
				subtitleStyle={styles(props.muiTheme).subtitle}
			/>
		</Card>
);

export default muiThemeable()(UserProfile);