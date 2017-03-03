import React, {PropTypes} from 'react';

import {connect} from 'react-redux';

import List from 'material-ui/List/List';
import muiThemeable from 'material-ui/styles/muiThemeable';

import EmployeeItem from './EmployeeItem';
import {cleanDependants} from '../../containers/dependant/dependantsAction';
import {cleanEmployments} from '../../containers/employment/employmentsAction';
import {cleanGrades} from '../../containers/grade/gradesAction';
import {rebuildEmp} from '../../containers/emp/Emp';
import {replaceEmp} from '../../containers/emp/currentEmpAction';

const mapStateToProps = (state) => {
	return {
		employees: state.employees,
		currentEmp: state.currentEmp
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onClick: (employee) => {
			// TODO warn user if the data hasn't been saved yet
			dispatch(replaceEmp(
				rebuildEmp(employee)
			));
			// TODO reload related dependants
			dispatch(cleanDependants());
			// TODO reload related employment history
			dispatch(cleanEmployments());
			// TODO reload related grade history
			dispatch(cleanGrades());
		}
	};
};

const EmpList = ({employees, currentEmp, onClick}) => (
	<List>
		{employees.map((emp) => 
			<EmployeeItem employee={emp} key={emp.id}
				selected={emp.id === currentEmp.id}
				onClick={onClick}
			/>)}		
	</List>
);
EmpList.propTypes = {
	employees: PropTypes.array.isRequired,
	currentEmp: PropTypes.object
};


const EmployeeList = connect(mapStateToProps, mapDispatchToProps)(EmpList);

export default muiThemeable()(EmployeeList);