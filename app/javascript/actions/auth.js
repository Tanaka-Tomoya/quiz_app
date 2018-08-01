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
			const uid = response.headers['uid']
			const client = response.headers['client']
			const accessToken = response.headers['access-token']
			const expiry = response.headers['expiry']
			const storage = localStorage
			storage.uid = response.headers['uid'];
			storage.client = response.headers['client'];
			storage.accessToken = response.headers['access-token'];
			dispatch(successAuthentication(uid, client, accessToken, expiry))
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
			localStorage.clear();
		}).then(res =>{
			location.reload();
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

function successAuthentication(uid, client, accessToken, expiry) {
	return { type: RECEIVED, uid, client, accessToken, expiry }
}

function failAuthentication() {
	return { type: FAILED }
}

function doSignout() {
	return { type: SIGNOUT }
}
