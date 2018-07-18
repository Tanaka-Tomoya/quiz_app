import React from 'react'
import AnswerField from './answerField'
import styled from 'styled-components'

export default class AnswerPage extends React.Component {
	componentWillMount() {
		const num = this.props.match.params.id
		this.props.getQuestion(num);
	}
	componentWillReceiveProps(nextProps) {
		console.log(nextProps.answerItem)
	}
	componentWillUpdate(nextProps, nextState){
	}

  render() {
    return (
			<div>
				<AnswerField question={this.props.answerItem}/>
			</div>
			)
  }
}

const Container = styled.div`
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
