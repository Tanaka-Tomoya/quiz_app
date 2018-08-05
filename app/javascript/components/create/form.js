import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';
import Text from '../general/text';
import RadioControl from '../general/radio';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio'
import Button from '@material-ui/core/Button';
import validate from '../form/createQuestionValidate'
import asyncValidate from '../form/asyncValidate'

class Form extends React.Component {
  render() {
		const {handleSubmit} = this.props
    return (
      <FormContainer>
        <Typography variant="display3">作成</Typography>
        <FormContent onSubmit={handleSubmit}>
          <Label variant="headline">タイトル</Label>
          <Field name="title" type="text" component={Text} label="Title"/>
          <Label variant="headline">問題</Label>
          <Field name="question" type="text" component={Text} label="Question"/>
          <Label variant="headline">選択肢</Label>
  				<Field name="a" type="text" component={Text} label="A"/>
  				<Field name="b" type="text" component={Text} label="B"/>
  				<Field name="c" type="text" component={Text} label="C"/>
  				<Field name="d" type="text" component={Text} label="D"/>
          <Label variant="headline">答え</Label>
          <Control>
            <Field name="answer" component={RadioControl}>
              <FormControlLabel value="a" control={<Radio />} label="A" />
              <FormControlLabel value="b" control={<Radio />} label="B" />
              <FormControlLabel value="c" control={<Radio />} label="C" />
              <FormControlLabel value="d" control={<Radio />} label="D" />
            </Field>
          </Control>
          <Submit>
            <Button type="submit" color="primary" variant="contained">Submit</Button>
          </Submit>
        </FormContent>
      </FormContainer>
    );
  }
}

export default reduxForm({
  form: 'Form',
  validate: validate,
  asyncValidate
})(Form)

const FormContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
  text-align: left;
`
const FormContent = styled.form`
  height: 800px;
  width: 95%;
  text-align: left;
  padding: 30px 0 0 40px;
`
const SelectLabel = styled(InputLabel)`
`
const SelectField = styled(Field)`
`
const Control = styled(FormControl)`

`
const Submit = styled.div`
  margin-top: 70px;
  padding-left: 5px;
`
const Label = styled(Typography)`
  line-height: 50px !important;
  height: 36px;
`
