import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid';
import { Field, reduxForm } from 'redux-form';
import Text from '../general/text';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import validate from '../form/userValidate'
import asyncValidate from '../form/asyncValidate'



class Signup extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			email: '',
			nickname: '',
			password: ''
		}
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	postTest() {

	}

	handleSubmit() {
		const { email, password, name, nickname } = this.state
		console.log({email})
		this.props.signupAuthenticate(name, email, nickname, password);
	}
	render() {
		const { handleSubmit } = this.props;
		console.log(this.state)
		return (
				<Content onSubmit={handleSubmit(this.handleSubmit)}>
					<Typography variant="display2" style={{paddingTop: '10px',marginBottom: '10px'}}>新規登録の方はこちら</Typography>
					<Label variant="headline">名前</Label>
					<Field name="name" type="text" value={this.state.name} component={Text} label="Name" onChange={(e) => this.setState({ name: e.target.value })}/>

					<Label variant="headline">ニックネーム</Label>
					<Field name="nickname" type="text" value={this.state.nickname} component={Text} label="Nickname" onChange={(e) => this.setState({ nickname: e.target.value })}/>

					<Label variant="headline">Email</Label>
					<Field name="email" type="text" value={this.state.email} component={Text} label="Email" onChange={(e) => this.setState({ email: e.target.value })}/>

					<Label variant="headline">Password</Label>
					<Field name="password" type="text" value={this.state.password} component={Text} label="Password(八文字以上入力してください)" onChange={(e) => this.setState({ password: e.target.value })}/>

					<Button type="submit" variant="contained" color="primary">登録する</Button>
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
	form: 'Signup',
	validate: validate,
	asyncValidate
})(Signup)
