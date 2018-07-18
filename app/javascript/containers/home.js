import { connect } from 'react-redux';
import { fetchQuestionsIfNeeded } from '../actions';
import Home from '../components/home/home';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    fetchQuestions: () => { dispatch(fetchQuestionsIfNeeded()); }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
