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
		console.log(this.props.value)
console.log(this.props.tabValue)
		const {tabValue} = this.props
		const {value} = this.props
		return (
			<div>
			{ tabValue === value &&
				<div>
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
