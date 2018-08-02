import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid';
import { Field, reduxForm } from 'redux-form';
import Text from '../general/text';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class Signup extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			email: '',
			nickname: '',
			password: ''
		}
	}

	postTest() {
		const { email, password, name, nickname } = this.state
		this.props.signupAuthenticate(name, email, nickname, password);
	}

	handleSubmit() {
		const { name, email, password, nickname } = this.state
		const fd = new FormData()
		fd.append('name', name)
		fd.append('email', email)
		fd.append('nickname', nickname)
		fd.append('password', password)
		fetch('/api/auth', {
      method: 'POST',
      header: { 'Content-Type': 'application/json' },
      body: fd
    })
    .then( res => res.json())
		.then( json => {
      console.log(json)
			this.props.history.push('/signin');
    })
		.error( error =>{
			console.log(error)
		})
	}
	render() {
		return (
				<Content>
					<Typography variant="display2">新規登録の方はこちら</Typography>
					<Label variant="headline">名前</Label>
					<Field name="name" type="text" value={this.state.name} component={Text} label="Name" onChange={(e) => this.setState({ name: e.target.value })}/>

					<Label variant="headline">ニックネーム</Label>
					<Field name="nickname" type="text" value={this.state.nickname} component={Text} label="Nickname" onChange={(e) => this.setState({ nickname: e.target.value })}/>

					<Label variant="headline">Email</Label>
					<Field name="email" type="text" value={this.state.email} component={Text} label="Email" onChange={(e) => this.setState({ email: e.target.value })}/>

					<Label variant="headline">Password</Label>
					<Field name="password" type="text" value={this.state.password} component={Text} label="Password" onChange={(e) => this.setState({ password: e.target.value })}/>

					<Button type="submit" variant="contained" color="primary" onClick={this.postTest.bind(this)}>登録する</Button>
				</Content>
		)
	}
}

const Content = styled.div `
	height: 500px;
`
const Label = styled(Typography)`
`
export default reduxForm({
	form: 'Signup'
})(Signup)
