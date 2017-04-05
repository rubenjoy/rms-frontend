import {combineReducers} from 'redux';
import reduceReducers from 'reduce-reducers';

import addresses from './containers/address/addresses';
import currentEmp from './containers/emp/currentEmp';
import dependants from './containers/dependant/dependants';
import employees from './containers/employee/employees';
import employments from './containers/employment/employments';
import grades from './containers/grade/grades';
import locations from './containers/location/locations'
import fetchStatus from './async/fetchStatus'

import {employees as asyncEmployees} from './async/employee/reducers';

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
// 		8. fetchStatus is current status from Web Fetch

const rmsApp = combineReducers({
					employees: reduceReducers(employees, asyncEmployees),
					currentEmp,
					dependants,
					grades,
					employments,
					locations,
					addresses,
					fetchStatus
				});

export default rmsApp;