import { connect } from 'react-redux';
import Information from '../components/information/userInformation';

function mapStateToProps(state) {
	return state;
}

function mapDispatchToProps(dispatch) {
	return
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Information);
