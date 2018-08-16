export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const COUNT_CORRECT = 'COUNT_CORRECT'

function receiveQuestion(question) {
  return {
    type: RECEIVE_QUESTION,
    question
  };
}

function countCorrect() {
  return {
    type: COUNT_CORRECT
  };
}

export function getQuestion(id) {
  return dispatch => { fetch('/api/v1/questions/' + id)
    .then(response => response.json())
    .then(json => dispatch(receiveQuestion(json)));
  }
}

export function countCorrectAnswer(count,id) {
  const obj = { correct_answer_count: count + 1 }
  console.log(obj)
  const method = "PATCH";
  const body = JSON.stringify(obj);
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
  fetch(`/api/v1/question/${id}`,{method, headers, body})
  return dispatch => {
    dispatch(countCorrect());
  }
}
//{ "api_v1_question" :  "title": "titl"  }
