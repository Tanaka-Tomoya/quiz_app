import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid';

export default class Menu extends Component {
	logout() {
		this.props.signout();
	}
	render() {
		const { auth } = this.props
		const { isAuthenticated } = auth
		if ( this.props.auth.isAuthenticated && this.props.auth.client && this.props.auth.accessToken && this.props.auth.uid ) {
			return (
				<Test item xs={12}>
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
							<Signout onClick={this.logout.bind(this)} size="large">Signout</Signout>
						</Div>
					</MenuBar>
				</Test>
			)
		} else {
		return (
			<div></div>
			)
		}
	}
}
const Div = styled.div`
	display: flex;
`
const MenuBar = styled(AppBar)`
`
const Signout = styled(Button)`
	display: block;
	margin-left: auto !important;
`
const Test = styled.div`
	height: 40px;
	width: 100%;
`
