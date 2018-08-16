import { connect } from 'react-redux';
import AnswerPage from '../components/answerpage/answerPage';
import { getQuestion } from '../actions/answerPage';
import { countCorrectAnswer } from '../actions/answerPage';

function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return {
    getQuestion: (id) => { dispatch(getQuestion(id)); },
    countCorrectAnswer: (count,id) => { dispatch(countCorrectAnswer(count,id)); },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerPage);
