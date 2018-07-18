import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import styled from 'styled-components'

export default class Menu extends Component {
	render() {
		return (
						<MenuBar color="inherit">
							<Div>
								<a href="/">
									<Button size="large">
										Home
									</Button>
								</a>
								<a href="/create" >
									<Button size="large">
										Create
									</Button>
								</a>
							</Div>
						</MenuBar>
		)
	}
}
const Div = styled.div`
	display: flex;
`
const MenuBar = styled(AppBar)`
`
