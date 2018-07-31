import { connect } from 'react-redux'
import Signup from '../components/signup/signup'

function mapStateToProps(state) {
	const { auth } = state
	const { isAuthenticated } = auth
	return { isAuthenticated }
}
export default connect(mapStateToProps)(Signup)
