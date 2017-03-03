import React from 'react';
import {PropTypes} from 'react';

import ActionDelete from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';

import ModifyEmploymentDialog from './ModifyEmploymentDialog';

const defaultStyles = {
	root: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'stretch',
		width: '640px'
	},
	divLeft: {
		flex: '0 1 160px',
		fontWeight: '500'
	},
	divCenter: {
		flex: '2 1 380px',
		fontWeight: '300'
	},
	divActions:  {
		flex: '0 1 96px'
	},
	formTr: {
		padding: '1px 0px 1px 0px'
	},
	formTd: {
		width: '215px',
		padding: '0px 5px 0px 0px',
	}
}

const dateOptions = {
	month: 'short', 
	year: 'numeric'
}
const formater = new Intl.DateTimeFormat('en-US',dateOptions);

let i = 0;
const ViewRow = (props) => {
	const employment = props.employment;
	const styles = props.styles || defaultStyles;

	return (
	<div style={styles.root} className="employment-view-row-root">
		<div className="employment-view-row-left"
			style={styles.divLeft}
		>
			<table><tbody>
				<tr style={styles.formTr}>
					<td style={styles.formTd}>
						{formater.format(employment.startDate)}
					</td>
					<td style={styles.formTd}>
						- {employment.activeInd ? 'Till Present' : 
							formater.format(employment.endDate)}
					</td>
				</tr>
				<tr style={styles.formTr}>
					<td colSpan="2">
						{employment.employer || 'n/a'}
					</td>
				</tr>
				<tr style={styles.formTr}>
					<td colSpan="2">
						{employment.jobTitle || 'n/a'}
					</td>
				</tr>
			</tbody></table>
		</div>
		<div className="employment-view-row-center"
			style={styles.divCenter}
		>
			<ul>
				{employment.jobDesc.length === 0 ? 
					<div> currently the jobdesc is empty </div> :
					employment.jobDesc.map(desc => 
						<li key={i++}>
							{desc}
						</li>
					)
				}
			</ul>
		</div>
		<div className="employment-view-row-actions"
			style={styles.divActions}
		>
			<ModifyEmploymentDialog 
				employment={employment}
				onChange={props.onChange}
			/>
			<IconButton onTouchTap={() => {
					props.deleteClick(employment.id)
				}}
				tooltip="remove"
			>
				<ActionDelete />
			</IconButton>
		</div>
	</div>
	);
};

ViewRow.propTypes = {
	employment: PropTypes.object.isRequired,
	deleteClick: PropTypes.func,
	onChange: PropTypes.func
}

export default ViewRow;