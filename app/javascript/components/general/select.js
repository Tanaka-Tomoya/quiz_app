import React from 'react';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText'
import styled from 'styled-components';

export default class SelectFiled extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }

	render() {
		const { input,label,children, meta: { touched, error } } = this.props
		return(
			<SelectItem>
				<SelectField
					hintText={label}
					floatingLabelText={label}
					{...input}
					children={children}

				/>
				{touched &&
						<FormHelperText	error={touched}>{this.props.meta.error}</FormHelperText>
					 }
			</SelectItem>
		)
	}
}
const SelectItem = styled.div`
`
const SelectField = styled(Select) `
`
