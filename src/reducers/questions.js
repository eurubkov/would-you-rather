import { ADD_QUESTION } from "../actions/questions";

const questions = (state = {}, action) => {
  switch (action.type) {
    case ADD_QUESTION:
      const { question } = action;
      return { ...state, [question.id]: question };
    default:
      return state;
  }
};

export default questions;
