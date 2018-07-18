import { REQUEST_QUESTIONS, RECEIVE_QUESTIONS, RECEIVE_QUESTION } from '../actions/index';

const initialState = {
  isFetching: false,
  items: [
  ],
}

export default function questions(state = initialState, action) {
  switch (action.type) {
    case REQUEST_QUESTIONS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_QUESTIONS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.questions,
      });
    default:
      return state;
  }
}
