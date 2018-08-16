import React from 'react'
import AnswerField from './answerField'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button';

export default class AnswerPage extends React.Component {

	componentWillMount() {
		const num = this.props.match.params.questionsId
		const props = this.props
		async function questions() {
			await props.getQuestion(num);
		}
		questions()
	}

  render() {
		const { auth } = this.props
		const { isAuthenticated } = auth
		const { four_choice_questions } = this.props.answerItem.item
		const { title } = this.props.answerItem.item
		const { correct_answer_count } = this.props.answerItem.item
		const questionsElementId = this.props.match.params.questionsElementId
		const questionsId = this.props.match.params.questionsId
    if ( localStorage.client && localStorage.accessToken && localStorage.uid && isAuthenticated ) {
			return (
				<Grid container justify='center' style={{height: '800px'}}>
					<Container  item xs={8}>
					{four_choice_questions ?
						<AnswerField count={correct_answer_count} title={title} questionsId={questionsId} questionsElementId={questionsElementId} questionLength={four_choice_questions.length} question={four_choice_questions[questionsElementId]} answer={this.props.form.AnswerField}/>
						:
						<div>undefined</div>
						}
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
