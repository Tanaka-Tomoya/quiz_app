import React from 'react';
import Question from './question';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField'

class Article extends React.Component {
	render() {
		return(
			<Main>
				<Search>
					<Form action="">
						<SearchForm
							id="word"
							label="Search"
							/>
					</Form>
				</Search>
				{	this.props.questions.items.map((question,i)=>
						<Question {...question} key={i}/> )}
			</Main>
		);
	}
}

const Main = styled.div`
	background-color: white;
	color: black;
	height: 100%;
`
const Search = styled.div`
	width: 100%;
	height: 50px;
	background-color: white;
`
const Form = styled.form`
	width: 100%;
	height: 100%;
`
const SearchForm = styled(TextField)`
	width: 100%;

`

export default Article
