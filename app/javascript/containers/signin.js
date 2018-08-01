import { connect } from 'react-redux';
import Signin from '../components/signin/signin'
import { authenticate } from '../actions/auth';

function mapStateToProps(state) {
	const { auth } = state
	const { loading, isAuthenticated } = auth
	return {
		loading,
		isAuthenticated
	}
}

function mapDispatchToProps(dispatch) {
	return {
		authenticate: (email, password) => { dispatch(authenticate(email, password)); }
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Signin)
