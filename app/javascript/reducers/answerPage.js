import { RECEIVE_QUESTION } from '../actions/answerPage'
import { COUNT_CORRECT } from '../actions/answerPage'

const initialState = {
	item: [
  ]
}
export default function answerItem(state = initialState, action) {
	switch(action.type) {
		case RECEIVE_QUESTION:
      return Object.assign({}, state, {
        item: action.question
      });
		case COUNT_CORRECT:
			return state;
		default:
      return state;
	}
}
