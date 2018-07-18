export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';

function receiveQuestion(question) {
  return {
    type: RECEIVE_QUESTION,
    question
  };
}

export function getQuestion(id) {
  return dispatch => { fetch('/api/v1/four_choice_questions/' + id)
    .then(response => response.json())
    .then(json => dispatch(receiveQuestion(json)));
  }
}
