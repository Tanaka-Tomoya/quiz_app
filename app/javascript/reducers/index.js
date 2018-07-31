import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import questions from './question';
import create from './create';
import answerItem from './answerPage';
import auth from './auth';

const rootReducer = combineReducers ({
  questions,
  create,
  answerItem,
  auth,
  form: formReducer
})

export default rootReducer;
