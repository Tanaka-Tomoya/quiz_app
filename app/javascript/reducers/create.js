import { POST_QUESTION } from '../actions/create'
import { POST_QUESTION_TITLE } from '../actions/create'
const initialState = {

}

export default function create(state = initialState, action) {
	switch (action.type){
		case POST_QUESTION:
			return state;
		case POST_QUESTION_TITLE:
			return state;
		default:
			return state;
	}
}
