import React from 'react'

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
	}

	render() {
		const { isAuthenticated } = this.props
		if (isAuthenticated) {
			return <div><h1>success</h1></div>
		}
		return (
			<div>
				<h2>Login</h2>
				<p>Email: <input type="text" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} /></p>
				<p>Password: <input type="text" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} /></p>
				<p><input type="submit" value="Login" onClick={this.handleSubmit.bind(this)} /></p>
			</div>

		)
	}
}
export default Signin
