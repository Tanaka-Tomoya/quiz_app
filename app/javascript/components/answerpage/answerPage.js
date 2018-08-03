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
		// console.log(nextProps.answerItem)
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
	background-color: white;
`
// const id = parseInt(params.id,10)
//
// const qqqq = value.questions
// console.log(qqqq)
// console.log(value)
// this.props.fetchQuestions();
// console.log(this.props.questions)
// function asyncFunction(a) {
// 	return new Promise(function (resolve, reject) {
// 		setTimeout(function (){
// 			a.fetchQuestions();
// 			resolve();
// 		}, 1000);
// 	});
// }
//
// asyncFunction(a)
// .then(function (){
// 	console.log('a')
// }).catch(function (error) {
// 	console.log("error")
// });
// 	 if( nextProps.questions.items.length > 0  && nextProps.isFetching == false ) {
// 		console.log('t')
// 		return true;
// 	} else {
// 		console.log('u')
// 		return false;
// 	}
// 	return false
