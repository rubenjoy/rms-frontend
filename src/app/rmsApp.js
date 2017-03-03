import {combineReducers} from 'redux';

import addresses from './containers/address/addresses';
import currentEmp from './containers/emp/currentEmp';
import dependants from './containers/dependant/dependants';
import employees from './containers/employee/employees';
import employments from './containers/employment/employments';
import grades from './containers/grade/grades';
import locations from './containers/location/locations'

// this is RMS App container
// contains :
// 		1. Employees
//		2. current Employee (the selected 
//				employee from Employees)
//		3. Dependants from current Employee
//		4. Grades from current Employee
//		5. Employements from current Employee
//		6. Locations from current Employee
//		7. Address from current Employee

const rmsApp = combineReducers({
					employees, 
					currentEmp,
					dependants,
					grades,
					employments,
					locations,
					addresses
				});

export default rmsApp;