import React, {PropTypes} from 'react';

import {connect} from 'react-redux';

import muiThemeable from 'material-ui/styles/muiThemeable';
import {Tabs, Tab} from 'material-ui/Tabs';

import ActionHistory from 'material-ui/svg-icons/action/history';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionWork from 'material-ui/svg-icons/action/work';
import CommLocation from 'material-ui/svg-icons/communication/location-on';
import NotificationWc from 'material-ui/svg-icons/notification/wc';
import SocialPerson from 'material-ui/svg-icons/social/person';

import AddressForm from '../address/AddressForm';
import DependantForm from '../dependant/DependantForm';
import EmploymentView from '../employment/EmploymentView';
import FormWrapper from './FormWrapper';
import GradeForm from '../grade/GradeForm';
import LocationView from '../location/LocationView';
import ModifyEmployeeForm from '../employee/ModifyEmployeeForm';

import {buildEmployee} from '../../containers/emp/Emp';
import {patchEmployee} from '../../async/employee/actions';

const styles = {
	root: {
		width: '700px'
	},
	headline: {},
	form: {
		height: '530px',
		width: '100%'
	}
};

const mapStateToProps = (state) => ({
	employee: state.currentEmp
});
const mapDispatchToProps = {
	patchEmployee: patchEmployee
};

const TabPane = ({employee, style, patchEmployee}) => (
	<Tabs style={style ||  styles.root}>
		<Tab icon={<SocialPerson />}>
			<FormWrapper style={styles.form}
				title="Personal Record"
				onSubmitClick={() => {
					if (employee.id !== undefined) {
						patchEmployee(buildEmployee(employee));
					}
				}}
			>
				{employee.id === '' ? 
					<div> select employee first. </div> :
					<ModifyEmployeeForm />
				}
			</FormWrapper>
		</Tab>
		<Tab icon={<ActionHistory />}>
			<FormWrapper style={styles.form}
				title="Employment History"
				onSubmitClick={() => {
				}}
			>
				{employee.id === '' ?
					<div> select employee first. </div> :
					<EmploymentView />
				}
			</FormWrapper>
		</Tab>
		<Tab icon={<ActionWork />}>
			<FormWrapper style={styles.form}
				title="Grade History"
				onSubmitClick={() => {
				}}
			>
				{employee.id === '' ? 
					<div>select employee first.</div> :
					<GradeForm />
				}
			</FormWrapper>
		</Tab>
		<Tab icon={<NotificationWc />}>
			<FormWrapper style={styles.form}
				title="Dependants Record"
				onSubmitClick={() => {
				}}
			>
				{employee.id === '' ?
					<div>select employee first.</div> :
					<DependantForm />
				}
			</FormWrapper>
		</Tab>
		<Tab icon={<ActionHome />}>
			<FormWrapper style={styles.form}
				title="Address Record"
				onSubmitClick={() => {
				}}
			>
				{employee.id === '' ?
					<div>select employee first.</div> :
					<AddressForm />
				}
			</FormWrapper>
		</Tab>
		<Tab icon={<CommLocation />}>
			<FormWrapper style={styles.form}
				title="Location Record"
				onSubmitClick={() => {
				}}
			>
				{employee.id === '' ?
					<div>select employee first.</div> :
					<LocationView />
				}
			</FormWrapper>
		</Tab>
	</Tabs>
);

TabPane.propTypes = {
	employee: PropTypes.object.isRequired
}

export default muiThemeable()(
	connect(mapStateToProps, mapDispatchToProps)(TabPane)
);