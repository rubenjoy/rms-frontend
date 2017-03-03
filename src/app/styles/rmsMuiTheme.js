import {pinkA200, grey100, cyan500
		, grey300, grey400, grey500, white
		, darkBlack, fullBlack,} from 'material-ui/styles/colors';
import {deepPurple200, purple500} from 'material-ui/styles/colors';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

const rmsMuiTheme = getMuiTheme({
	palette: {
		primary1Color: deepPurple200,
		primary2Color: purple500,
		primary3Color: grey400,
		accent1Color: pinkA200,
		accent2Color: grey100,
		accent3Color: grey500,
		textColor: darkBlack,
		alternateTextColor: white,
		canvasColor: white,
		borderColor: grey300,
		pickerHeaderColor: cyan500,
		shadowColor: fullBlack,
	}
});

export default rmsMuiTheme;

