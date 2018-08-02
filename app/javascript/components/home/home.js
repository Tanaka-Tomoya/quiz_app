import React, { Component } from 'react'
import styled from 'styled-components'
import Article from './article'
import Grid from '@material-ui/core/Grid';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button';

export default class Home extends Component {
	componentWillMount() {
	this.props.fetchQuestions();
	// if ( localStorage.client && localStorage.accessToken && localStorage.uid ) {
	//
	// 	}
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
		if ( this.props.auth.isAuthenticated && this.props.auth.client && this.props.auth.accessToken && this.props.auth.uid ) {
			return (
				<Container container justify='center'>
					<Grid item xs={4} >
						<Article questions={this.props.questions}/>
					</Grid>
				</Container>
			)
		} else {
		return <Redirect to="/information" />
		}
	}
}

const Container = styled(Grid)`
	width: 100%;
  height: 1000px;
`
