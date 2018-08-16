import React from 'react';
import Form from './form';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import 'babel-polyfill';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button';

export default class Create extends React.Component {
  onSubmitEvent(values) {
    const props = this.props
    const questions = values.questions
    const title = values.title
    async function submit() {
      await props.createQuestionTitle(title);
      await questions.forEach( (questions) => {
         props.createQuestion(questions);
      })
      props.history.push('/');
    }
    console.log(values)
    console.log(values.title)
    console.log(values.questions)
    submit()

    // this.props.createQuestion(values);
    // this.props.history.push('/');
  }
  render() {
    const { auth } = this.props
		const { isAuthenticated } = auth
    if ( localStorage.client && localStorage.accessToken && localStorage.uid && isAuthenticated ) {
			return (
        <CreateMain container justify='center' spacing={24}>
          <Grid item xs={8}>
            <Form onSubmit={this.onSubmitEvent.bind(this)} />
          </Grid>
        </CreateMain>
			)
		} else {
		  return <Redirect to="/information" />
		}
  }
}

const CreateMain = styled(Grid)`
  width: 100%;
  height: auto;
`
