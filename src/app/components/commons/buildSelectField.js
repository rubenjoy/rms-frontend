import React from 'react';

import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

/**
 *  valueOptions are array of object {id: *, text: *}
 *   e.g.: countryOptions = [
 *					{id: 0, text: 'Indonesia'}
 *					...
 *				]
 *  string key must unique
 */

  const buildSelectField = (valueOptions
		, selectFieldValues = {
			id: 'id',
			value: 0,
			floatingLabelText: 'label text',
			hintText: 'hint text',
			name: 'name',
			onChange: function(/*e,k,v*/) {}
		}
		, styles = {
			style: {},
			errorStyle: {},
			floatingLabelStyle: {},
			hintStyle: {},
			labelStyle: {},
			listStyle: {},
			menuItemStyle: {},
			menuStyle: {},
			selectedMenuItemStyle: {},
		}) => {
			const items = valueOptions.map(
				option => 
				<MenuItem key={option.id} value={option.id}
					primaryText={option.text}
				/>
			);
			return React.createClass({
				propTypes: {
					id: React.PropTypes.string,
					value: React.PropTypes.number,
					floatingLabelText: React.PropTypes.string,
					hintText: React.PropTypes.string
				},
				getDefaultProps: function() {
					return {...selectFieldValues}
				},
				getInitialState: function() {
					return {value: selectFieldValues.value};
				},
				handleChange: function(evt, key, value) {
					this.setState({
						value
					});

					if ((typeof selectFieldValues.onChange) === 'function') {
						selectFieldValues.onChange(evt, key, value);
					}
				},
				render: function () {
					return (
						<SelectField 
							{...styles} 
							{...selectFieldValues}
							onChange={this.handleChange}
							value={this.state.value}
						>{items}
						</SelectField>
					);
				}
			});
};

export default buildSelectField;