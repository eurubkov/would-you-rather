import {
  ADD_QUESTION,
  ADD_ANSWER,
  RECEIVE_QUESTIONS,
} from "../actions/questions";

const questions = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_QUESTION:
      const { question } = action;
      return { ...state, [question.id]: question };
    case ADD_ANSWER:
      const { answer } = action;
      return {
        ...state,
        [answer.qid]: {
          ...state[answer.qid],
          [answer.answer]: {
            ...state[answer.qid][answer.answer],
            //TODO: handle the case when a user answers the same question multiple times?
            votes : state[answer.qid][answer.answer].votes.concat(answer.authedUser)
          }
        },
      };
    default:
      return state;
  }
};

export default questions;
