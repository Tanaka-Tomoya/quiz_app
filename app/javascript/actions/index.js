export const REQUEST_QUESTIONS = 'REQUEST_QUESTIONS';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';


function requestQuestions() {
  return { type: REQUEST_QUESTIONS };
}

function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}

function fetchQuestions() {
  return dispatch => {
    const name = ''
    dispatch(requestQuestions());
    return fetch('/api/v1/questions')
      .then(response => response.json())
      .then(json => dispatch(receiveQuestions(json)));
  };
}

function shouldFetchQuestions(state) {
  const questions = state.questions;
  if (questions.items.length === 0 && !questions.isFetching) {
    return true;
  } else {
    return false;
  }
}

export function fetchQuestionsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchQuestions(getState())) {
      return dispatch(fetchQuestions());
    }
  }
}
