import React from 'react';
import Select from '@material-ui/core/Select';
import styled from 'styled-components';

export default class SelectFiled extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }

	render() {
		const { input,label,children,...custom} = this.props
		return(
			<SelectItem>
				<Select
					hintText={label}
					floatingLabelText={label}
					{...input}
					children={children}
					{...custom}
				/>
			</SelectItem>
		)
	}
}
const SelectItem = styled.div`
	height: 100%;
`
