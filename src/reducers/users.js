import { RECEIVE_USERS } from "../actions/users";
import { ADD_ANSWER, ADD_QUESTION } from "../actions/questions";
import produce from "immer";

const users = (state = {}, action) => {
  return produce(state, (draftState) => {
    switch (action.type) {
      case RECEIVE_USERS:
        return action.users;
      case ADD_ANSWER:
        const { answer } = action;
        draftState[answer.authedUser]["answers"][answer.qid] = answer.answer;
        return draftState;
      case ADD_QUESTION:
        const { question } = action;
        draftState[question.author].questions.push(question.id);
        return draftState;
      default:
        return draftState;
    }
  });
};

export default users;
