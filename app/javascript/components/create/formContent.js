import React from 'react';
import styled from 'styled-components';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import FieldArrayContent from '../form/createFieldArrayContent'


export default class FormContent extends React.Component {
	constructor(props) {
    super(props)
    this.state = {
      value: 0,
			tabAmount: 1,
			tabs: []
    }
  this.handleChange = this.handleChange.bind(this)
	this.addQuestion = this.addQuestion.bind(this)
  }
	componentWillMount() {
		const {fields} = this.props
		fields.push()
		console.log(fields)
	}
  handleChange(event, value) {
    this.setState({ value });
  }
	addQuestion() {
		const {fields} = this.props
		this.setState({ tabAmount: this.state.tabAmount + 1})
		fields.push()
	}
	render() {
		const {value} = this.state
		const {fields} = this.props
		const {tabAmount} = this.state
		const {tabs} = this.state
		console.log(this.props.question)
		tabs.splice(0,tabs.length)
		console.log(fields)
		for (let i = 0; i < tabAmount; i++ ) {
			tabs.push(
				<TabElement label={`${i + 1}`} key={i}/>
			)
		}
		return (
			<div>
				<TabContent>
					<TabBar value={value} onChange={this.handleChange}>
						{tabs}
					</TabBar>
				</TabContent>
				{fields.map((question, i) =>
					<FieldArrayContent key={i} value={i} tabValue={value} question={question} />
				)}
								<Button onClick={this.addQuestion}>+</Button>
			</div>

		)
	}
}

const TabContent = styled.div`
  height: 50px;
`
const TabBar = styled(Tabs)`
  width: 100%;
  height: 100%;
`
const TabElement = styled(Tab) `
  width: 50px;
  height: 30px;
`
