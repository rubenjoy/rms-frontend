import React from 'react';
import {PropTypes} from 'react';

import {connect} from 'react-redux';

import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import Grade from '../../containers/grade/Grade';
import {addGrade, modifyGrade,
		removeGrade} from '../../containers/grade/gradesAction';
import InputRow from './InputRow';

const styles = {
	root: {
		height: '428px',
		width: '100%'
	},
	form: {
		width: '620px',
		margin: '0 auto'
	},
	formTr: {
		padding: '1px 0px 1px 0px',
	},
	formTd: {
		width: '135px',
		padding: '0px 5px 0px 0px'
	},
	formInput: {
		width: '135px'
	},
	formAction: {
		width: '48px',
		padding: '0px 0px 0px 0px'
	},
	addButton: {
		position: 'absolute',
		right: '48px',
		bottom: '80px',
	}
};


const mapStateToProps = (state) => {
	return {
		grades: state.grades,
		employee: state.currentEmp
	};
}
const mapDispatchToProps = (dispatch) => {
	return {
		addClick: (id) => {
			dispatch(addGrade(new Grade({
				employeeId: id,
				startDate: new Date(),
				endDate: new Date()
			})));
		},
		deleteClick: (id) => {
			dispatch(removeGrade(id));
		},
		onChange: (grade) => {
			dispatch(modifyGrade(grade));
		}
	}
}

const GradeForm = (props) => {
	return(
		<div style={styles.root}>
		{ props.grades.length === 0 ?
			<div>
				Currently the employee's grades list is empty.
				Please add new grade record first.
			</div> :
			<form style={styles.form}><table>
				<thead><tr style={styles.formTr}>
					<th style={styles.formTd}>
						DS
					</th>
					<th style={styles.formTd}>
						Grade
					</th>
					<th style={styles.formTd}>
						Start Date
					</th>
					<th style={styles.formTd}>
						End Date
					</th>
					<th style={styles.formAction}>
						Actions
					</th>
				</tr></thead>
				<tbody>
					{props.grades.map(grade => (
						<InputRow grade={grade} key={grade.id}
							styles={styles}
							deleteClick={props.deleteClick}
							onChange={props.onChange}
						/>
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
	);}

GradeForm.propTypes = {
	grades: PropTypes.array.isRequired,
	addClick: PropTypes.func.isRequired,
}

export default connect(mapStateToProps,mapDispatchToProps)(GradeForm);