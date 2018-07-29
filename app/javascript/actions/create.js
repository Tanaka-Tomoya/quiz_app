export const POST_QUESTION = 'POST_QUESTION';

function postQuestion() {
  return { type: POST_QUESTION };
}

export function createQuestion(values) {
  console.log(values)
  const obj = values;
  const method = "POST";
  const body = JSON.stringify(obj);
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
  fetch("/api/v1/four_choice_questions",{method, headers, body})
  return dispatch => {
    dispatch(postQuestion());
  }
}
