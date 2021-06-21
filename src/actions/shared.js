import { _getUsers } from "../utils/_DATA";
import { receiveUsers } from "../actions/users";

export const handleInitialData = () => {
  return async (dispatch) => {
    const users = await _getUsers();
    dispatch(receiveUsers(users));
  };
};
