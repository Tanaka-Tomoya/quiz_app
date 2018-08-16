import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

export default class AnswerResult extends React.Component {
	componentWillMount() {
		const questionsId = this.props.match.params.questionsId;
		this.props.getQuestion(questionsId);
	}

	render() {
		const { correct_answer_count } = this.props.answerItem.item
 		return(
			<Container container justify='center' style={{height: '800px'}}>
				<Result item xs={8}>結果は{correct_answer_count}</Result>
			</Container>
		)
	}
}

const Container = styled(Grid)`
`
const Result = styled(Grid)`
	height: 100%;
	background-color: white;
`
