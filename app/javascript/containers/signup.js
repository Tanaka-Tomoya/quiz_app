import { connect } from 'react-redux'
import Signup from '../components/signup/signup'

function mapStateToProps(state) {
	const { auth } = state
	const { isAuthenticated } = auth
	return { isAuthenticated }
}
function mapDispatchToProps(dispatch) {
	return {
		signupAuthenticate: (name, email, nickname, password) => { dispatch(signupAuthenticate(name, email, nickname, password)); }
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps)(Signup)
