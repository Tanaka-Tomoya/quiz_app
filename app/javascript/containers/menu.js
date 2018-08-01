import { connect } from 'react-redux';
import Menu from '../components/general/menu'
import { signout } from '../actions/auth';

function mapStateToProps(state) {
	return state
}

function mapDispatchToProps(dispatch) {
	return {
		signout: () => { dispatch(signout()); }
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Menu)
