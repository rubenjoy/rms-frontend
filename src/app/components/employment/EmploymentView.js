import React from 'react';
import {PropTypes} from 'react';

import {connect} from 'react-redux';

import Divider from 'material-ui/Divider';

import {modifyEmployment,
		removeEmployment} from '../../containers/employment/employmentsAction';
import CreateEmploymentDialog from './CreateEmploymentDialog';
import ViewRow from './ViewRow';

const styles = {
	root: {},
}

const mapStateToProps = (state) => {
	return {
		employments: state.employments
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		deleteClick: (id) => {
			// id is employment id
			dispatch(removeEmployment(id));
		},
		onChange: (employment) => {
			dispatch(modifyEmployment(employment))
		}
	}
}

const EmploymentView = (props) => (
	<div style={styles.root}>
		<div>
		{ props.employments.length === 0 ?
			<div> 
				Currently the employee's employment history is empty. 
				Please add new employment record first.
			</div> :
			props.employments.map( item => 
				<div className="employment-view-map"
					key={item.id}
				>
				<ViewRow employment={item} 
					deleteClick={props.deleteClick}
					onChange={props.onChange}
				/>
				<Divider />
				</div>
			)
		}
		</div>
		<CreateEmploymentDialog />
	</div>
);

EmploymentView.propTypes = {
	employments: PropTypes.array.isRequired
}

export default connect(mapStateToProps,
				mapDispatchToProps)(EmploymentView);