import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid';

export default class Introduction extends React.Component {
	constructor(props){
		super(props)
	}
	render() {
		return(
			<GridContent item xs={6}>
				<h2>Signup</h2>
			</GridContent>
		)
	}
}
const GridContent = styled(Grid) `
	height: 100%;

`
