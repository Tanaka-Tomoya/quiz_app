import React from 'react';
import { Field, reduxForm, FieldArray } from 'redux-form';
import styled from 'styled-components';
import RadioControl from '../general/radio';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import formContent from './formContent'
import validate from '../form/createQuestionValidate'
import asyncValidate from '../form/asyncValidate'

class Form extends React.Component {

  render() {
    const {handleSubmit} = this.props
    console.log(handleSubmit)
    return (
      <FormContainer>
        <Typography variant="display3">作成</Typography>
        <Content onSubmit={handleSubmit}>
          <FieldArray name="questions" component={formContent}/>
          <Submit>
            <Button type="submit" color="primary" variant="contained">Submit</Button>
          </Submit>
        </Content>
      </FormContainer>
    );
  }
}
export default reduxForm({
  form: 'Form',
  validate,
  asyncValidate
})(Form)

const Container = styled.div `
  width: 100%;
  height: 100%;
`
const FormContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
  text-align: left;

`

const Content = styled.form`
  height: 800px;
  width: 90%;
  text-align: left;
  padding: 30px 0 0 40px;
`

const Submit = styled.div`
  margin-top: 70px;
  padding-left: 5px;
`
