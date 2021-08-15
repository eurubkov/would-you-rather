import { RECEIVE_USERS } from "../actions/users";
import { ADD_ANSWER, ADD_QUESTION } from "../actions/questions";

const users = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return { ...state, ...action.users };
    case ADD_ANSWER:
      const { answer } = action;
      return {
        ...state,
        [answer.authedUser]: {
          ...state[answer.authedUser],
          answers: {
            ...state[answer.authedUser].answers,
            [answer.qid]: answer.answer,
          },
        },
      };
    case ADD_QUESTION:
      const { question } = action;
      return {
        ...state,
        [question.author]: {
          ...state[question.author],
          questions: [...state[question.author].questions, question.id],
        },
      };
    default:
      return state;
  }
};

export default users;
