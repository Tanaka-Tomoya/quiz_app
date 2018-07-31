import axios from 'axios'

export const REQUEST = 'REQUEST'
export const RECEIVED = 'RECEIVED'
export const FAILED = 'FAILED'
export const SIGNOUT = 'SIGNOUT'

export function authenticate(email, password) {
	return (dispatch, getState) => {
		dispatch(startAuthentication())
		return axios({
			url: '/api/auth/sign_in',
			method: 'POST',
			data: { email, password }
		}).then(response => {
			dispatch(successAuthentication())
		}).catch(error => {
			dispatch(failAuthentication())
		})
	}
}

export function signout() {
	return (dispatch, getState) => {
		const { auth } = getState()
		return axios({
			url: 'api/auth/sign_out',
			method: 'DELETE',
			headers: {
				'access-token': auth.accessToken,
				'client': auth.client,
				'uid': auth.uid
			}
		}).then(response => {
			dispatch(doSignout())
		}).catch(error => {
			console.log(error)
		})
	}
}

export function expireAurthentication() {
	return doSignout()
}

function startAuthentication() {
	return { type: REQUEST }
}

function successAuthentication() {
	return { type: RECEIVED }
}

function failAuthentication() {
	return { type: FAILED }
}

function doSignout() {
	return { type: SIGNOUT }
}
