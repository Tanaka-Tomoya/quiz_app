import React, { Component } from 'react'
import styled from 'styled-components'
import Article from './article'
import Grid from '@material-ui/core/Grid';

export default class Home extends Component {
	componentWillMount() {
	this.props.fetchQuestions();

	}
	componentDidMount() {
	}
	render() {
		return (
				<Container item xs={12}>
					<Grid item xs={4} >
						<Article questions={this.props.questions}/>
					</Grid>
				</Container>

		)
	}
}

const Container = styled(Grid)`
	width: 100%;
  height: auto;
`
