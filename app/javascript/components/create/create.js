import React from 'react';
import Form from './form';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import 'babel-polyfill';


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
    return (
      <CreateMain item xs={12}>
        <Grid item xs={4}>
          <Form onSubmit={this.onSubmitEvent.bind(this)} />
        </Grid>
      </CreateMain>
    );
  }
}

const CreateMain = styled(Grid)`
  width: 100%;
  height: auto;
`
