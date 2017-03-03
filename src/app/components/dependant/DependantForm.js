import React from 'react';
import {PropTypes} from 'react';

import {connect} from 'react-redux';

import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import {addDependant, modifyDependant,
		removeDependant} from '../../containers/dependant/dependantsAction';
import Dependant from '../../containers/dependant/Dependant';
import InputRow from './InputRow';

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
		width: '118px',
		padding: '0px 2px 0px 0px'
	},
	formInput: {
		width: '118px'
	},
	formActive: {
		width: '58px',
		padding: '0px 2px 0px 0px',
	},
	formAction: {
		width: '32px',
		padding: '0px 0px 0px 0x'
	},
	addButton: {
		position: 'absolute',
		right: '48px',
		bottom: '80px'
	}
};

const mapStateToProps = (state) => {
	return {
		dependants: state.dependants,
		employee: state.currentEmp
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		addClick: (id) => {
			dispatch(addDependant(new Dependant({
				employeeId: id,
				birthDate: new Date()
			})));
		},
		deleteClick: (id) => {
			dispatch(removeDependant(id));
		},
		onChange: (dependant) => {
			dispatch(modifyDependant(dependant));
		}
	};
}

const DependantForm = (props) => { 
		const styles = props.styles || defaultStyles;
		const dependants = props.dependants;

		return (
			<div style={styles.root}>
			{ dependants.length === 0 ?
				<div>
					Currently the employee's dependants list is empty.
					Please add new dependant record first.
				</div> :			
				<form style={styles.form}><table>
					<thead><tr style={styles.formTr}>
						<th style={styles.formTd}>
							Name
						</th>
						<th style={styles.formTd}>
							Gender
						</th>
						<th style={styles.formTd}>
							Date of Birth
						</th>	
						<th style={styles.formTd}>
							Relation
						</th>
						<th style={styles.formActive}>
							Active
						</th>
						<th style={styles.formAction}>
							
						</th>
					</tr></thead>
					<tbody>
						{dependants.map(dep => (
							<InputRow dependant={dep} key={dep.id}
								styles={styles}
								deleteClick={props.deleteClick}
								onChange={props.onChange}/>
						))}
					</tbody>
				</table></form>
			}
			<FloatingActionButton style={styles.addButton}
				onTouchTap={() => props.addClick(props.employee.id)}
			>
				<ContentAdd />
			</FloatingActionButton>
			</div>
		);
}
DependantForm.propTypes = {
	dependants: PropTypes.array.isRequired,
	styles: PropTypes.object,
	addClick: PropTypes.func.isRequired
}

export default connect(mapStateToProps,mapDispatchToProps)(DependantForm);