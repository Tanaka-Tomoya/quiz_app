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
        <FormContent onSubmit={handleSubmit}>
          <Typography variant="headline" style={{lineHeight:"50px",height:"36px"}}>タイトル</Typography>
          <Field name="title" type="text" component={Text} label="Title"/>
          <Typography variant="headline" style={{lineHeight:"50px",height:"36px"}}>選択肢</Typography>
  				<Field name="a" type="text" component={Text} label="A"/>
  				<Field name="b" type="text" component={Text} label="B"/>
  				<Field name="c" type="text" component={Text} label="C"/>
  				<Field name="d" type="text" component={Text} label="D"/>
          <Typography variant="headline" style={{lineHeight:"50px",height:"36px"}}>答え</Typography>
          <Control>
            <InputLabel>Answer</InputLabel>
    				<SelectField
              name="Answer"
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
`
const FormContent = styled.form`
  height: 800px;
  width: 95%;
  text-align: left;
  padding-top: 30px;
`
const SelectField = styled(Field)`
  height: 40px;
  width: 90%;
`
const Control = styled(FormControl)`
  width: 100%;
  margin-left: 30px !important;
`
const Submit = styled.div`
  margin-top: 70px;
  text-align: right;
`
const TitleField = styled.div`
`
