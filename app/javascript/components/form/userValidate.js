import React from 'react'

const validate = values => {
	const errors = {}
	const requiredFields = [
		'name',
		'email',
		'nickname',
		'password',
	]
	requiredFields.forEach(field => {
		if(!values[field]) {
			errors[field] = '入力してください'
		}
	})
	if (
		values.email &&
		!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
	) {
		errors.email = 'Invalid email address'
	}
	return errors
}

export default validate
