import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid';
import Signin from '../../containers/signin'
import Signup from '../../containers/signup'
import Introduction from './introduction'
import background from './background.jpg'

export default class Information extends React.Component {
	constructor(props){
		super(props)
	}
	render() {
		return(
			<Content>
				<Opacity container>
					<Introduction/>
					<Form xs={6}>
						<Signup/>
						<Signin/>
					</Form>
				</Opacity>
      </Content>
		)
	}
}

const Content = styled.div`
	width: 100%;
	background-image: url(${background});
	background-repeat: no-repeat;
	background-position: center center;
	background-size: cover;
`
const Opacity = styled(Grid)`
	width: 100%;
	height: 100%;
	background-color: rgba(255,255,255,0.5);
`
const Form = styled(Grid) `
	height: 100%;
`
