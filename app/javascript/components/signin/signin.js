import React from 'react'
import { Redirect } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components'
import { Field, reduxForm } from 'redux-form';
import Text from '../general/text';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class Signin extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: ''
		}
	}
	handleSubmit() {
		const { email, password } = this.state
		this.props.authenticate(email, password);
		// document.cookie = 'accessToken=this.props.auth.accessToken max-age=30';
	}

	render() {
		console.log(this.state)
		const { isAuthenticated } = this.props
		if (localStorage.client && localStorage.accessToken && localStorage.uid) {
			return <Redirect to="/"/>
		}
		return (
			<Content>
				<Typography variant="display2">アカウントをお持ちの方はこちら</Typography>

				<Label variant="headline">Email</Label>
				<Field name="email" type="text" value={this.state.email} component={Text} label="Email" onChange={(e) => this.setState({ email: e.target.value })}/>

				<Label variant="headline">Password</Label>
				<Field name="password" type="text" value={this.state.password} component={Text} label="password" onChange={(e) => this.setState({ password: e.target.value })}/>

				<Button type="submit" variant="contained" color="primary" onClick={this.handleSubmit.bind(this)}>ログインする</Button>
			</Content>

		)
	}
}

const Content = styled.div `
	height: 200px;
`

const Label = styled(Typography)`
`
export default reduxForm({
	form: 'Signin'
})(Signin)
