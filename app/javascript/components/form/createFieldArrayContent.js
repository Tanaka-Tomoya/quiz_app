import React from 'react';
import { Field, reduxForm, FieldArray } from 'redux-form';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Text from '../general/text';
import Radio from '@material-ui/core/Radio'
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import RadioControl from '../general/radio';

export default class CreateFieldArrayContent extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		const {tabValue} = this.props
		const {value} = this.props
		const {question} = this.props
		console.log(question)
		return (
			<div>
			{ tabValue === value &&
				<div key={value}>
					<Label variant="headline">問題#{value + 1}</Label>
					<Label variant="headline">タイトル</Label>
					<Field name={`${question}.title`} type="text" component={Text} label="Title"/>
					<Label variant="headline">問題</Label>
					<Field name={`${question}.question`} type="text" component={Text} label="Question"/>
					<Label variant="headline">選択肢</Label>
					<Field name={`${question}.a`} type="text" component={Text} label="A"/>
					<Field name={`${question}.b`} type="text" component={Text} label="B"/>
					<Field name={`${question}.c`} type="text" component={Text} label="C"/>
					<Field name={`${question}.d`} type="text" component={Text} label="D"/>
					<Label variant="headline">答え</Label>
					<Control>
						<Field name={`${question}.answer`} component={RadioControl}>
							<FormControlLabel value="a" control={<Radio />} label="A" />
							<FormControlLabel value="b" control={<Radio />} label="B" />
							<FormControlLabel value="c" control={<Radio />} label="C" />
							<FormControlLabel value="d" control={<Radio />} label="D" />
						</Field>
					</Control>
				</div>
			}
		</div>
		)
	}
}

const Label = styled(Typography)`
  line-height: 50px !important;
  height: 36px;
`

const Control = styled(FormControl)`
`
