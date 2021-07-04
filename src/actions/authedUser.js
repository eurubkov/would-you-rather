export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const LOGOUT_AUTHED_USER = "LOGOUT_AUTHED_USER";

export const setAuthedUser = (id) => ({
  type: SET_AUTHED_USER,
  id,
});

export const logoutAuthedUser = () => ({
  type: LOGOUT_AUTHED_USER,
});