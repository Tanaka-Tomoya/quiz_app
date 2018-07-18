import { connect } from 'react-redux';
import Create from '../components/create/create';
import { createQuestion } from '../actions/create';

function mapStateToProps(state) {
	return state;
}

function mapDispatchToProps(dispatch) {
	return {
    createQuestion: (values) => { dispatch(createQuestion(values)); }
	};
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Create);
