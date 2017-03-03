import {connect} from 'react-redux';

import EmployeeForm from './EmployeeForm';
import {modifyEmp} from '../../containers/emp/currentEmpAction';

// TODO what is the best way to map errors
const mapStateToProps = (state) => ({
	emp: state.currentEmp,
	errors: undefined
});

const mapDispatchToProps = (dispatch) => ({
	onChange: (empData) => {
		dispatch(modifyEmp(empData));
	}
});

const ModifyEmployeeForm = connect(
	mapStateToProps, mapDispatchToProps)(
	EmployeeForm
);

export default ModifyEmployeeForm;