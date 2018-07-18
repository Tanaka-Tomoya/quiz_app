import { POST_QUESTION } from '../actions/create'

const initialState = {

}

export default function create(state = initialState, action) {
	switch (action.type){
		case POST_QUESTION:
		return state;
		default:
			return state;
	}
}
