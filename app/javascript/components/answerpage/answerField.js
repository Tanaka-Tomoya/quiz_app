import React from 'react'
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components'

export default class AnswerField extends React.Component {
	componentWillReceiveProps(nextProps) {
		console.log(nextProps.question.item.id)
	}
	render() {
		return (
			<div>
				<Typography variant="display3" color="inherit">
					{this.props.question.item.title}
				</Typography>
				<p>{this.props.question.item.a}</p>
				<p>{this.props.question.item.b}</p>
				<p>{this.props.question.item.c}</p>
				<p>{this.props.question.item.d}</p>
			</div>
		)
	}
}
