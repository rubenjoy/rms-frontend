import React, {PropTypes} from 'react';

import ActionDelete from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';

const defaultStyles = {
	formTr: {
		padding: '1px 0px 1px 0px'
	},
	formTd: {
		width: '480px',
		padding: '0px 2px 0px 0px'
	},
	formInput: {
		width: '480px'
	},
}

const InputRow = (props) => {
	const styles = props.styles || defaultStyles;
	const address = props.address;

	return <tr style={styles.formTr}>
		<td style={styles.formTd}>
			<TextField id="address" name="address"
				style={styles.formInput}
				value={address.address}
				onChange={(e,value) => {
					props.onChange({
						id: address.id,
						address: value
					})
				}}
			/>
		</td>
		<td style={styles.formTd}>
			<Checkbox id="activeInd" name="activeInd"
				value={address.activeInd}
				onCheck={(e, value) => {
					props.onChange({
						id:address.id,
						activeInd: value
					})
				}}
			/>
		</td>
		<td>
			<IconButton style={styles.formAction}
				tooltip="remove"
				onTouchTap={() => {
					props.deleteClick(address.id);
				}}
			>
				<ActionDelete />
			</IconButton>
		</td>
	</tr>
}

InputRow.propTypes = {
	address: PropTypes.object.isRequired
}

export default InputRow;