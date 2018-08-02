import { REQUEST, RECEIVED, FAILED, SIGNOUT } from '../actions/auth';

let initialState

if ( localStorage.client && localStorage.accessToken && localStorage.uid ) {
  initialState = {
		loading: false,
		isAuthenticated: true,
		client: localStorage.client,
		accessToken: localStorage.accessToken,
		uid: localStorage.uid,
		expiry: null
	}
} else {
  initialState = {
		loading: false,
		isAuthenticated: false,
		client: null,
		accessToken: null,
		uid: null,
		expiry: null
	}
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
					isAuthenticated: true,
          uid: action.uid,
          client: action.client,
          accessToken: action.accessToken,
          expiry: action.expiry
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
				{
					loading: false,
					isAuthenticated: false,
					client: null,
					accessToken: null,
					uid: null,
					expiry: null,
				}
			)
		default: return state
	}
}
