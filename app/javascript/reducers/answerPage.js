import { RECEIVE_QUESTION } from '../actions/answerPage'
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
		default:
      return state;
	}
}
