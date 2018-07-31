import React, { Component } from 'react'
import Menu from '../components/general/menu'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import configureStore from '../store';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter,Route } from 'react-router-dom'
import Home from '../containers/home'
import Create from '../containers/create'
import AnswerPage from '../containers/answerPage'
import Signup from '../containers/signup'
import Signin from '../containers/signin'
import styled from 'styled-components'

let store = configureStore();

export default class App extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<Provider store={store}>
					<BrowserRouter>
						<MainGrid container align="center">
							<Test item xs={12}>
								<Menu />
							</Test>
							<Route exact path='/' component={Home} />
					  	<Route exact path='/create' component={Create} />
							<Route exact path='/answer/:id' component={AnswerPage} />
							<Route exact path='/signup' component={Signup} />
							<Route exact path='/signin' component={Signin} />
						</MainGrid>
					</BrowserRouter>
				</Provider>
			</MuiThemeProvider>
		)
	}
}

const MainGrid = styled(Grid)`
	height: auto;
`

const Test = styled.div`
	height: 40px;
	width: 100%;
`
