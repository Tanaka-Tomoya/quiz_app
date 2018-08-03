import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default class Introduction extends React.Component {
	constructor(props){
		super(props)
	}
	render() {
		return(
			<GridContent item xs={6}>
				<Content>
					<Welcome variant="display2">ようこそ</Welcome>
				</Content>
				<Intro variant="subheading">簡単30秒でプログラミングを学習！</Intro>
				<Intro variant="subheading">あなたも隙間の時間で少し賢くなりましょう！！！</Intro>
			</GridContent>
		)
	}
}

const GridContent = styled(Grid) `
	height: 100%;
`
const Content = styled.div `
	width: 100%;
	height: 75px;
`
const Welcome = styled(Typography) `
	padding-top: 20px;
	padding-left: 20px;
`
const Intro = styled(Typography) `
	padding-left: 20px;
`
