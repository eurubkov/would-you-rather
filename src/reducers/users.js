import { RECEIVE_USERS } from "../actions/users";
import { ADD_ANSWER } from "../actions/questions";

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
    default:
      return state;
  }
};

export default users;
