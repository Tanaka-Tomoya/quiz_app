import { connect } from 'react-redux';
import Create from '../components/create/create';
import { createQuestion } from '../actions/create';
import { createQuestionTitle } from '../actions/create';

function mapStateToProps(state) {
	return state;
}

function mapDispatchToProps(dispatch) {
	return {
    createQuestion: (questions) => { dispatch(createQuestion(questions)); },
		createQuestionTitle: (title) => { dispatch(createQuestionTitle(title)); }
	};
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Create);
