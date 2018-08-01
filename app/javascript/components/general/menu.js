import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import styled from 'styled-components'

export default class Menu extends Component {
	logout() {
		this.props.signout();
		location.reload();
	}
	render() {
		const { auth } = this.props
		const { isAuthenticated } = auth
		if ( localStorage.client && localStorage.accessToken && localStorage.uid ) {
			return (
				<MenuBar color="inherit">
					<Div>
						<Link to="/">
							<Button size="large">
								Home
							</Button>
						</Link>
						<Link to="/create" >
							<Button size="large">
								Create
							</Button>
						</Link>
						<Button onClick={this.logout.bind(this)}>Signout</Button>
					</Div>
				</MenuBar>
			)
		} else {
		return (
			<div>

			</div>
			)
		}
	}
}
const Div = styled.div`
	display: flex;
`
const MenuBar = styled(AppBar)`
`
