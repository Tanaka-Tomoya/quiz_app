import React from 'react';
import styled from 'styled-components';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FieldArrayContent from '../form/createFieldArrayContent'

export default class FormContent extends React.Component {
	constructor(props) {
    super(props)
    this.state = {
      value: 0,
    }
  this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event, value) {
    this.setState({ value });
  }
	render() {
		const {value} = this.state
		let fields = [0,1]
		return (
			<div>
				<TabContent>
					<TabBar value={value} onChange={this.handleChange}>
						<TabElement label="1"/>
						<TabElement label="2"/>
					</TabBar>
				</TabContent>
				{fields.map((fields, i) =>
					<FieldArrayContent key={i} value={i} tabValue={value} />
				)}
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
