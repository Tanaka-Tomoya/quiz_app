import React from 'react';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText'

export default class Radio extends React.Component {
	render() {
		const { input, meta: { touched, error }, ...rest } = this.props
		return (
			<div>
				<RadioGroup
					{...input}
					{...rest}
					valueSelected={input.value}
					onChange={(event, value) => input.onChange(value)}
				/>
				{touched &&
						<FormHelperText	error={touched}>{this.props.meta.error}</FormHelperText>
					 }
			</div>
		)
	}
}
