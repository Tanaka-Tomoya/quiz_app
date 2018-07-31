import React from 'react'

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

	handleSubmit() {
		const { name, email, password, nickname } = this.state
		const fb = new FormData()
		fb.append('name', name)
		fb.append('email', email)
		fb.append('nickname', nickname)
		fb.append('password', password)
		fetch('/api/auth', {
      method: 'POST',
      header: { 'Content-Type': 'application/json' },
      body: fb
    })
    .then(res => res.json())
    .then(json => {
      console.log(json)
      console.log(document.cookie)
    })
	}
	render() {
		const { isAuthenticated } = this.props
		if (isAuthenticated) {
			return <div>success</div>
		}
		return (
			<div>
        <h2>Signup</h2>
        <p>Name: <input type="text" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} /></p>
				<p>Nickname: <input type="text" value={this.state.nickname} onChange={(e) => this.setState({ nickname: e.target.value })} /></p>
        <p>Email: <input type="text" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} /></p>
        <p>Password: <input type="text" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} /></p>
        <p><input type="submit" value="Signup" onClick={this.handleSubmit.bind(this)} /></p>
      </div>
		)
	}
}
export default Signup
