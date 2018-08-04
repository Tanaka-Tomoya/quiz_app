import React from 'react'
import AnswerField from './answerField'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button';

export default class AnswerPage extends React.Component {

	componentWillMount() {
		const num = this.props.match.params.id
		this.props.getQuestion(num);
	}
	componentWillReceiveProps(nextProps) {
	}
	componentWillUpdate(nextProps, nextState){
	}

  render() {
		const { auth } = this.props
		const { isAuthenticated } = auth
    if ( localStorage.client && localStorage.accessToken && localStorage.uid && isAuthenticated ) {
			return (
				<Grid container justify='center' style={{height: '800px'}}>
					<Container  item xs={8}>
						<AnswerField question={this.props.answerItem} answer={this.props.form.AnswerField}/>
					</Container>
				</Grid>
			)
		} else {
		return <Redirect to="/information"/>
		}
  }
}

const Container = styled(Grid)`
	background-color: white;
`
