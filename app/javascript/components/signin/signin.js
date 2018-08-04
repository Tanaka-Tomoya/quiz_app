import React from 'react'
import { Redirect } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components'
import { Field, reduxForm } from 'redux-form';
import Text from '../general/text';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import validate from '../form/userValidate'
import asyncValidate from '../form/asyncValidate'


class Signin extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: ''
		}
	this.handleSubmit = this.handleSubmit.bind(this)
	}
	handleSubmit() {
		const { email, password } = this.state
		this.props.authenticate(email, password);
	}

	render() {
		const { handleSubmit } = this.props;
		return (
			<Content onSubmit={handleSubmit(this.handleSubmit)}>
				<Typography variant="display2">アカウントをお持ちの方はこちら</Typography>

				<Label variant="headline">Email</Label>
				<Field name="email" type="text" value={this.state.email} component={Text} label="Email" onChange={(e) => this.setState({ email: e.target.value })}/>

				<Label variant="headline">Password</Label>
				<Field name="password" type="text" value={this.state.password} component={Text} label="Password" onChange={(e) => this.setState({ password: e.target.value })}/>

				<Button type="submit" variant="contained" color="primary">ログインする</Button>
			</Content>
		)
	}
}

const Content = styled.form `
	height: 500px;
`

const Label = styled(Typography)`
`
export default reduxForm({
	form: 'Signin',
	validate: validate,
	asyncValidate
})(Signin)
