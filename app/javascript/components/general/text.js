import React from 'react';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

export default class Text extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }

	render() {
		const { input, label} = this.props
		return (
			<FormItem>
				<Field {...input} label={label}/>
			</FormItem>

		)
	}
}
					// {touched && error && <span>{error}</span>}
const FormItem = styled.div`
	width: 90%;
	font-size: 25px;
	padding-left: 30px;
`
const Field = styled(TextField)`
	width: 100%;

`
