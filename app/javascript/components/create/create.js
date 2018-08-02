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
    console.log(props)

    async function submit() {
      await props.createQuestion(values);
      props.history.push('/');
    }
    // console.log(values)
    submit()
    // this.props.createQuestion(values);
    // this.props.history.push('/');
  }
  render() {
    const { auth } = this.props
		const { isAuthenticated } = auth
    if ( localStorage.client && localStorage.accessToken && localStorage.uid && isAuthenticated ) {
			return (
        <CreateMain item xs={12}>
          <Grid item xs={6}>
            <Form onSubmit={this.onSubmitEvent.bind(this)} />
          </Grid>
        </CreateMain>
			)
		} else {
		  return <Redirect to="/signup" />
		}
  }
}

const CreateMain = styled(Grid)`
  width: 100%;
  height: auto;
`
