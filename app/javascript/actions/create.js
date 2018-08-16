export const POST_QUESTION = 'POST_QUESTION';
export const POST_QUESTION_TITLE = 'POST_QUESTION_TITLE';

function postQuestion() {
  return { type: POST_QUESTION };
}

function postQuestionTitle() {
  return { type: POST_QUESTION_TITLE }
}

export function createQuestion(questions) {
  const obj = {four_choice_question: questions}
  const method = "POST";
  const body = JSON.stringify(obj);
  console.log(body)
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
  fetch("/api/v1/four_choice_questions",{method, headers, body})
  return dispatch => {
    dispatch(postQuestion());
  }
}

export function createQuestionTitle(title) {
  const obj = { title: title }
  const method = "POST";
  const body = JSON.stringify(obj);
  console.log(body)
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
  fetch("/api/v1/questions", {method, headers, body})
  return dispatch => {
    dispatch(postQuestionTitle());
  }
}
