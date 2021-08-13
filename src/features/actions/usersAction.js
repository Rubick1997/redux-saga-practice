import * as type from "../types";

export function getUsers(action) {
  return {
    type: type.GET_USERS_REQUESTED,
    payload: action,
  };
}
