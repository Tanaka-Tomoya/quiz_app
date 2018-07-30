import React from 'react'
import styled from 'styled-components'
import { Field, reduxForm } from 'redux-form';
import Modal from 'react-modal'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio'
import RadioControl from '../general/radio';
import Button from '@material-ui/core/Button';
import logo from './logo.png'

class AnswerField extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isCorrectAnswer: false,
			showModal: false
		};
		this.handleModalOpen = this.handleModalOpen.bind(this);
		this.handleModalClose = this.handleModalClose.bind(this);
	}

	handleModalOpen() {
		console.log(this.props.question.item.answer)
		this.setState({showModal: true});
		if(this.props.answer.values.answer === this.props.question.item.answer) {
			this.setState({isCorrectAnswer: true})
		}
		console.log(this.state)
	}

	handleModalClose() {
		this.setState({showModal: false});
	}

	render() {
		if (this.props.answer !== undefined) {
			console.log(this.state)
		}
		return (
			<Container>
				<Title>
					<UserIcon src={logo} alt=""/><span>UserName</span><Date>2018/07/20</Date>
					<TitleValue variant="display3" color="inherit" style={{fontWeight: 600,fontSize:'42px',color:'#333333'}}>
						Q.{this.props.question.item.title}
					</TitleValue>
				</Title>
				<Content>
					<QuestionValue variant="display2"></QuestionValue>
						<FormControl>
							<Choices name="answer" component={RadioControl}>
								<Choice value="a" control={<Radio />} label={<span style={{fontSize: '30px'}}>1.{this.props.question.item.a}</span>}/>
								<Choice value="b" control={<Radio />} label={<span style={{fontSize: '30px'}}>2.{this.props.question.item.b}</span>}/>
								<Choice value="c" control={<Radio />} label={<span style={{fontSize: '30px'}}>3.{this.props.question.item.c}</span>}/>
								<Choice value="d" control={<Radio />} label={<span style={{fontSize: '30px'}}>4.{this.props.question.item.d}</span>}/>
							</Choices>
						</FormControl>
				</Content>
				<Modal
					isOpen={this.state.showModal}
					contentLabel="Minimal Modal Example"
					className="Modal"
					overlayClassName="Overlay"
					onRequestClose={this.handleCloseModal}
					>
					{this.state.isCorrectAnswer ?
						<Result>正解</Result>
						:
						<Result>
							<div>不正解です</div>
							<div>正解は{this.props.question.item.answer}です</div>
						</Result>
					}
					<CloseButton>
						<Button color="primary" size="large" variant="contained" onClick={this.handleModalClose}>閉じる</Button>
						<Button href="/" color="primary" size="large"　variant="contained">一覧に戻る</Button>
					</CloseButton>
				</Modal>
				<AnswerButton>
					<Button color="primary" onClick={this.handleModalOpen} variant="contained">回答</Button>
				</AnswerButton>
			</Container>
		)
	}
}

const Container = styled.div `
	text-align: left;
`
const Title = styled.div`
	height: 140px;
	padding-top: 20px;
`
const UserIcon = styled.img `
	display: inline-block;
	width: 45px;
	height: 45px;
	border: 1px solid;
	border-radius: 10px;
`
const Date = styled.span `
 margin-left: 10px;
 display: inline-block;
 color: #808080;
`
const TitleValue = styled(Typography) `
	font-weight: 600;
	padding-top: 15px;
`
const QuestionValue = styled(Typography) `
`
const Content = styled.div `
	padding-left: 30px;
`
const Choice = styled(FormControlLabel) `
	font-size: 30px;
`
const Choices = styled(Field) `
	width: 1000px;
	padding-left: 75px;
	padding-top: 20px;
`
const CloseButton = styled.div `
	height: 20%;
	text-align: right;
`
const Result = styled.div `
	height: 80%;
`
const AnswerButton = styled.div `
	padding-left: 105px;
  height: 50px;
`
export default reduxForm({
	form: 'AnswerField'
})(AnswerField)

//<Choice value="a" control={<Radio style={{width: '100px',position: 'absolute'}}/>} label={<span style={{fontSize: '30px',position: 'absolute'}}>1.{this.props.question.item.a}</span>} style={{position: 'relative',width: '100%' }}/>
