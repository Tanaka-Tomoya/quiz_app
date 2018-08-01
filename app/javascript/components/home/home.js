import React, { Component } from 'react'
import styled from 'styled-components'
import Article from './article'
import Grid from '@material-ui/core/Grid';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button';

export default class Home extends Component {
	componentWillMount() {
	this.props.fetchQuestions();
	}
	componentDidMount() {
	}
	render() {
		const { auth } = this.props
		const { isAuthenticated } = auth
		console.log(localStorage)
		console.log(localStorage.client)
		console.log(localStorage.accessToken)
		console.log(localStorage.uid)
		if ( localStorage.client && localStorage.accessToken && localStorage.uid  ) {
			return (
				<Container item xs={12}>
					<Grid item xs={4} >
						<Article questions={this.props.questions}/>
					</Grid>
				</Container>
			)
		} else {
		return (
			<div>
				<p>Please signin or signup </p>
				<Link to="/signin">
					<Button size="large">
						signin
					</Button>
				</Link>
				<Link to="/signup" >
					<Button size="large">
						signup
					</Button>
				</Link>
			</div>
			)
		}
	}
}

const Container = styled(Grid)`
	width: 100%;
  height: auto;
`
