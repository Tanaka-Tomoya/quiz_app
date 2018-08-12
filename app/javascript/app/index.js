import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Provider } from 'react-redux';
import styled from 'styled-components'
import { BrowserRouter,Route } from 'react-router-dom'

import configureStore from '../store';
import Information from '../containers/userInformation';
import Home from '../containers/home'
import Create from '../containers/create'
import AnswerPage from '../containers/answerPage'
import Signup from '../containers/signup'
import Signin from '../containers/signin'
import Menu from '../containers/menu'

let store = configureStore();

export default class App extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<Provider store={store}>
					<BrowserRouter>
						<MainGrid container>
							<Menu />
							<Route exact path='/' component={Home} />
					  	<Route exact path='/create' component={Create} />
							<Route exact path='/answer/:questionsId/:questionId' component={AnswerPage} />
							<Route exact path='/information' component={Information} />
						</MainGrid>
					</BrowserRouter>
				</Provider>
			</MuiThemeProvider>
		)
	}
}

const MainGrid = styled(Grid)`
	height: 1000px;
`
