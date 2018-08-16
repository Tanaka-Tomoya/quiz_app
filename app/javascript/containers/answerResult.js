import { connect } from 'react-redux';
import AnswerResult from '../components/answerpage/answerResult';
import { getQuestion } from '../actions/answerPage';

function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return {
		getQuestion: (id) => { dispatch(getQuestion(id)); }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerResult);
