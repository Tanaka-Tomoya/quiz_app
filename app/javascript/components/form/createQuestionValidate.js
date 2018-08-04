import React from 'react'

const validate = values => {
	const errors = {}
	const requiredFields = [
		'title',
		'question',
		'a',
		'b',
		'c',
		'd',
		'answer'
	]
	requiredFields.forEach(field => {
		if(!values[field]) {
			errors[field] = '入力してください'
		}
	})
	return errors
}

export default validate
