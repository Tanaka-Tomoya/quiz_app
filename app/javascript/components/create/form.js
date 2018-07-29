import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';
import Text from '../general/text';
import Select from '../general/select';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
            <InputLabel>Answer</InputLabel>
    				<SelectField
              name="answer"
              component={Select}
              label="Answer"
              >
                <MenuItem value={''} name="">
                </MenuItem>
                <MenuItem value={'a'} name="a">a</MenuItem>
                <MenuItem value={'b'} name="b">b</MenuItem>
                <MenuItem value={'c'} name="c">c</MenuItem>
                <MenuItem value={'d'} name="d">d</MenuItem>
    				</SelectField>
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
  form: 'Form'
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
const SelectField = styled(Field)`
  height: 30px;
  width: 90%;
  padding-top: 20px;
`
const Control = styled(FormControl)`
  width: 100%;
  margin-left: 30px !important;
`
const Submit = styled.div`
  margin-top: 70px;
  padding-left: 5px;
`
const Label = styled(Typography)`
  line-height: 50px !important;
  height: 36px;
`
