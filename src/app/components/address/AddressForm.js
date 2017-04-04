import React, {PropTypes} from 'react';

import {connect} from 'react-redux';

import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import {modifyAddress} from '../../containers/address/addressesAction';
import Address from '../../containers/address/Address';
import InputRow from './InputRow';
import {
	postAddress,
	deleteAddress
} from '../../async/address/actions';

const defaultStyles = {
	root: {
		height: '428px',
		width: '100%'
	},
	form: {
		width: '620px',
		margin: '0 auto',
	},
	formTr: {
		padding: '1px 0px 1px 0px'
	},
	formTd: {
		width: '128px',
		padding: '0px 2px 0px 0px'
	},
	formInput: {
		width: '118px'
	},
	addButton: {
		position: 'absolute',
		right: '48px',
		bottom: '80px'
	}
}

const mapStateToProps = (state) => ({
	employee: state.currentEmp,
	addresses: state.addresses
})
const mapDispatchToProps = {
	addClick: postAddress,
	deleteClick: deleteAddress,
	onChange: modifyAddress
}

const AddressForm = (props) => {
	const styles = props.styles || defaultStyles;
	const addresses = props.addresses;

	return (
		<div style={styles.root}>
			{ addresses.length === 0 ?
				<div>
					Currently the employee's address history is empty.
					Please add new new address record first.
				</div> :
				<form style={styles.form}><table>
					<thead><tr>
						<th>Address</th>
						<th>Active</th>
					</tr></thead>
					<tbody>
						{
							addresses.map(item =>
								<InputRow address={item} key={item.id}
									deleteClick={props.deleteClick}
									onChange={props.onChange}
								/>
							)
						}
					</tbody>
				</table></form>
			}
			<FloatingActionButton style={styles.addButton}
				onTouchTap={() => {
					props.addClick(
						props.employee.id, new Address());
				}}
			>
				<ContentAdd />
			</FloatingActionButton>
		</div>
	);
}

AddressForm.propTypes = {
	addresses: PropTypes.array.isRequired,
	styles: PropTypes.object,
	addClick: PropTypes.func
}

export default connect(mapStateToProps,mapDispatchToProps)(
	AddressForm
);