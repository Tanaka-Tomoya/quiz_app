import { REQUEST,RECEIVED,FAILED,SIGNOUT } from '../actions/auth';

const initialState = {
	loading: false,
	isAuthenticated: false,
	client: null,
	accessToken: null,
	uid: null,
	expiry: null,
}

export default function reducer(state = initialState, action = {}) {
	switch ( action.type ) {
		case REQUEST:
			return Object.assign(
				{},
				state,
				{
					loading: true
				}
			)
		case RECEIVED:
			return Object.assign(
				{},
				state,
				{
					loading: false,
					isAuthenticated: true
				}
			)
		case FAILED:
			return Object.assign(
				{},
				state,
				{
					loading: false
				}
			)
		case SIGNOUT:
			return Object.assign(
				{},
				initialState
			)
		default: return state
	}
}
