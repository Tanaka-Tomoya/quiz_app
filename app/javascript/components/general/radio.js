import React from 'react';
import RadioGroup from '@material-ui/core/RadioGroup';

export default class Radio extends React.Component {
	render() {
		const { input, ...rest} = this.props
		return (
			<RadioGroup
				{...input}
				{...rest}
				valueSelected={input.value}
				onChange={(event, value) => input.onChange(value)}
			/>
		)
	}
}
