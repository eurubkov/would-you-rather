import {
  ADD_QUESTION,
  ADD_ANSWER,
  RECEIVE_QUESTIONS,
} from "../actions/questions";
import produce from "immer";

const questions = (state = {}, action) => {
  return produce(state, (draftState) => {
    switch (action.type) {
      case RECEIVE_QUESTIONS:
        draftState = action.questions;
        return draftState;
      case ADD_QUESTION:
        const { question } = action;
        draftState[question.id] = question;
        return draftState;
      case ADD_ANSWER:
        const { answer } = action;
        draftState[answer.qid][answer.answer]["votes"].push(answer.authedUser);
        return draftState;
      default:
        return state;
    }
  });
};


export default questions;
