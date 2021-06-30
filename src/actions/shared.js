import { _getUsers, _getQuestions } from "../utils/_DATA";
import { receiveUsers } from "../actions/users";
import { receiveQuestions } from "../actions/questions";

export const handleInitialData = () => {
  return async (dispatch) => {
    const users = await _getUsers();
    const questions = await _getQuestions();
    dispatch(receiveUsers(users));
    dispatch(receiveQuestions(questions));
  };
};
